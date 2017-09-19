package com.portal.dao.service;

import java.util.List;

import com.portal.dao.domain.User;
import com.portal.dao.domain.UserSkill;

public interface IUserServiceDao {

	public User validateUser(String userName, String password) throws Exception;

	public Boolean createUpdateUser(User user) throws Exception;

	public List<User> getUsers(User sessionUser);

	public Boolean deleteUser(Integer id);

	public Boolean resetUserPassword(Integer id) throws Exception;

	public User updateSessionUser(User user);

	public User changePassword(User sessionUser, String oldPassword,
			String newPassword) throws Exception;

	public List<User> getAllUsers();

	public Boolean createUpdateUserSkill(Integer id, UserSkill userSkill);

	public List<UserSkill> getUserSkills(Integer id);

	public Boolean deleteUserSkill(Integer id);

}
