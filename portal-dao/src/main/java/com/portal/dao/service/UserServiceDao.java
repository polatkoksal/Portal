package com.portal.dao.service;

import java.util.List;

import javax.crypto.Cipher;
import javax.crypto.spec.IvParameterSpec;
import javax.crypto.spec.SecretKeySpec;
import javax.persistence.EntityManager;
import javax.persistence.EntityManagerFactory;
import javax.persistence.EntityTransaction;
import javax.persistence.Persistence;
import javax.persistence.Query;

import org.apache.commons.codec.binary.Base64;

import com.portal.dao.domain.FaiDfaiJob;
import com.portal.dao.domain.OtherJob;
import com.portal.dao.domain.User;
import com.portal.dao.domain.UserSkill;

public class UserServiceDao implements IUserServiceDao {

	private EntityManagerFactory emf;
	private EntityManager em = null;
	private String key = "plt2015";
	private String defaultPass = "EngPortal";

	public UserServiceDao() {
		emf = Persistence.createEntityManagerFactory("portal-dao");
	}

	public EntityManager getEntityManager() {
		if (em == null || !em.isOpen()) {
			em = emf.createEntityManager();
		}
		return em;
	}

	@Override
	public User validateUser(String userName, String password) throws Exception {
		User user = null;
		em = this.getEntityManager();
		Query query = em
				.createQuery("select u from User u where u.userName =:userName");
		query.setParameter("userName", userName);
		List<User> users = query.getResultList();
		for (User u : users) {
			if (password.equals(decrypt(u.getPassword(), key))) {
				user = u;
			}
		}
		return user;
	}

	@Override
	public Boolean createUpdateUser(User user) throws Exception {
		em = this.getEntityManager();
		EntityTransaction et = em.getTransaction();
		et.begin();
		if (user.getId() == null) {
			user.setPassword(encrypt(defaultPass, key));
			em.persist(user);
		} else {
			User u = em.find(User.class, user.getId());
			user.setPassword(u.getPassword());
			em.merge(user);
		}
		et.commit();
		return true;
	}

	@Override
	public List<User> getUsers(User sessionUser) {
		em = this.getEntityManager();
		Query query = em
				.createQuery("select u from User u where u.id <> :id order by u.name");
		query.setParameter("id", sessionUser.getId());
		List<User> users = query.getResultList();
		return users;
	}

	@Override
	public List<User> getAllUsers() {
		em = this.getEntityManager();
		Query query = em.createQuery("select u from User u order by u.name");
		List<User> users = query.getResultList();
		return users;
	}

	@Override
	public Boolean deleteUser(Integer id) {
		em = this.getEntityManager();
		EntityTransaction et = em.getTransaction();
		Boolean flag = false;
		Boolean result = false;
		User user = em.find(User.class, id);
		if (user != null) {
			Query query1 = em
					.createQuery("select u from FaiDfaiJob u where u.responsible.id =:id");
			query1.setParameter("id", user.getId());
			List<FaiDfaiJob> faiDfaiJobs = query1.getResultList();
			Query query2 = em
					.createQuery("select u from OtherJob u where u.responsible.id =:id");
			query2.setParameter("id", user.getId());
			List<OtherJob> otherJobs = query2.getResultList();
			if (faiDfaiJobs.isEmpty() && otherJobs.isEmpty()) {
				flag = true;
			}
		}
		if (flag) {
			Query query = em
					.createQuery("select u from UserSkill u where u.user.id =:id");
			query.setParameter("id", id);
			List<UserSkill> userSkills = query.getResultList();
			et.begin();
			for (UserSkill uS : userSkills) {
				UserSkill userSkill = em.find(UserSkill.class, uS.getId());
				em.remove(userSkill);
			}
			et.commit();
			et.begin();
			em.remove(user);
			result = true;
			et.commit();
		}
		return result;
	}

	@Override
	public Boolean resetUserPassword(Integer id) throws Exception {
		em = this.getEntityManager();
		EntityTransaction et = em.getTransaction();
		User user = em.find(User.class, id);
		user.setPassword(encrypt(defaultPass, key));
		et.begin();
		em.merge(user);
		et.commit();
		return true;
	}

	@Override
	public User updateSessionUser(User user) {
		em = this.getEntityManager();
		EntityTransaction et = em.getTransaction();
		User u = em.find(User.class, user.getId());
		user.setPassword(u.getPassword());
		user.setRole(u.getRole());
		et.begin();
		user = em.merge(user);
		et.commit();
		return user;
	}

	@Override
	public User changePassword(User sessionUser, String oldPassword,
			String newPassword) throws Exception {
		User result = null;
		em = this.getEntityManager();
		EntityTransaction et = em.getTransaction();
		User user = em.find(User.class, sessionUser.getId());
		if (oldPassword.equals(decrypt(user.getPassword(), key))) {
			user.setPassword(encrypt(newPassword, key));
			et.begin();
			User u = em.merge(user);
			et.commit();
			result = u;
		}
		return result;
	}

	@Override
	public Boolean createUpdateUserSkill(Integer id, UserSkill userSkill) {
		em = this.getEntityManager();
		EntityTransaction et = em.getTransaction();
		User user = em.find(User.class, id);
		userSkill.setUser(user);
		et.begin();
		if (userSkill.getId() == null) {
			em.persist(userSkill);
		} else {
			em.merge(userSkill);
		}
		et.commit();
		return true;
	}

	@Override
	public List<UserSkill> getUserSkills(Integer id) {
		em = this.getEntityManager();
		Query query = em
				.createQuery("select u from UserSkill u where u.user.id =:id order by u.name");
		query.setParameter("id", id);
		List<UserSkill> userSkills = query.getResultList();
		return userSkills;
	}

	@Override
	public Boolean deleteUserSkill(Integer id) {
		em = this.getEntityManager();
		EntityTransaction et = em.getTransaction();
		UserSkill userSkill = em.find(UserSkill.class, id);
		et.begin();
		em.remove(userSkill);
		et.commit();
		return true;
	}

	private String encrypt(String text, String key) throws Exception {
		Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
		byte[] keyBytes = new byte[16];
		byte[] b = key.getBytes("UTF-8");
		int len = b.length;
		if (len > keyBytes.length)
			len = keyBytes.length;
		System.arraycopy(b, 0, keyBytes, 0, len);
		SecretKeySpec keySpec = new SecretKeySpec(keyBytes, "AES");
		IvParameterSpec ivSpec = new IvParameterSpec(keyBytes);
		cipher.init(Cipher.ENCRYPT_MODE, keySpec, ivSpec);

		byte[] results = cipher.doFinal(text.getBytes("UTF-8"));
		Base64 encoder = new Base64();

		return new String(encoder.encode(results));
	}

	private String decrypt(String text, String key) {
		String result = null;
		try {
			Cipher cipher = Cipher.getInstance("AES/CBC/PKCS5Padding");
			byte[] keyBytes = new byte[16];
			byte[] b = key.getBytes("UTF-8");
			int len = b.length;
			if (len > keyBytes.length)
				len = keyBytes.length;
			System.arraycopy(b, 0, keyBytes, 0, len);
			SecretKeySpec keySpec = new SecretKeySpec(keyBytes, "AES");
			IvParameterSpec ivSpec = new IvParameterSpec(keyBytes);
			cipher.init(Cipher.DECRYPT_MODE, keySpec, ivSpec);

			Base64 decoder = new Base64();

			byte[] results = cipher.doFinal((byte[]) decoder.decode(text));

			result = new String(results, "UTF-8");
		} catch (Exception e) {
			e.printStackTrace();
		}
		return result;
	}
}
