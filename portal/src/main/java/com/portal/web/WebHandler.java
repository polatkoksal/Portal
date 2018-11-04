package com.portal.web;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.io.OutputStream;
import java.io.PrintWriter;
import java.text.ParseException;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Iterator;
import java.util.List;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpSession;

import org.apache.commons.fileupload.FileItem;
import org.apache.commons.fileupload.FileUploadException;
import org.apache.commons.fileupload.disk.DiskFileItemFactory;
import org.apache.commons.fileupload.servlet.ServletFileUpload;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;

import com.google.gson.Gson;
import com.google.gson.JsonObject;
import com.portal.dao.domain.Action;
import com.portal.dao.domain.Document;
import com.portal.dao.domain.FaiControlList;
import com.portal.dao.domain.FaiDfaiJob;
import com.portal.dao.domain.Feedback;
import com.portal.dao.domain.Machine;
import com.portal.dao.domain.MachineTime;
import com.portal.dao.domain.MachineTool;
import com.portal.dao.domain.MachineToolList;
import com.portal.dao.domain.OtherJob;
import com.portal.dao.domain.Tool;
import com.portal.dao.domain.User;
import com.portal.dao.domain.UserSkill;
import com.portal.dao.model.MachineToolSearchParam;
import com.portal.dao.service.JobServiceDao;
import com.portal.dao.service.ToolServiceDao;
import com.portal.dao.service.UserServiceDao;
import com.portal.model.ActionItem;
import com.portal.model.ComboToolItem;
import com.portal.model.ComboUserItem;
import com.portal.model.DocumentItem;
import com.portal.model.FaiControlListItem;
import com.portal.model.FaiDfaiJobItem;
import com.portal.model.FeedbackItem;
import com.portal.model.MachineItem;
import com.portal.model.MachineTimeItem;
import com.portal.model.MachineToolItem;
import com.portal.model.MachineToolListItem;
import com.portal.model.MenuItem;
import com.portal.model.OtherJobItem;
import com.portal.model.ResultData;
import com.portal.model.ToolItem;
import com.portal.model.UserItem;
import com.portal.model.UserSkillItem;

@Controller
public class WebHandler {

	@Autowired
	private UserServiceDao userServiceDao;

	@Autowired
	private JobServiceDao jobServiceDao;

	@Autowired
	private ToolServiceDao toolServiceDao;

	@RequestMapping(value = "/login", method = RequestMethod.POST)
	public void tryLogin(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		response.setCharacterEncoding("UTF-8");
		User user = userServiceDao.validateUser(
				request.getParameter("userName"),
				request.getParameter("password"));
		if (user != null) {
			response.setStatus(HttpServletResponse.SC_OK);
			HttpSession session = request.getSession();
			session.setAttribute("sessionUser", user);
			response.addHeader("userRole", user.getRole());
			response.addHeader("userId", user.getId().toString());
		} else {
			response.setStatus(HttpServletResponse.SC_BAD_REQUEST);
		}
	}

	@RequestMapping(value = "/getMenuItems", method = RequestMethod.POST)
	public void getMenuItems(HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		response.setCharacterEncoding("UTF-8");

		User sessionUser = (User) request.getSession().getAttribute(
				"sessionUser");
		List<MenuItem> data = new ArrayList<MenuItem>();
		if (sessionUser.getRole().equals("Admin")
				|| sessionUser.getRole().equals("User")
				|| sessionUser.getRole().equals("PM")
				|| sessionUser.getRole().equals("Prod")
				|| sessionUser.getRole().equals("ProdFP")) {
			MenuItem item1 = new MenuItem();
			item1.setId("personalPage");
			item1.setText("Personal Page");
			item1.setLeaf(true);
			data.add(item1);
		}
		if (sessionUser.getRole().equals("Admin")) {
			MenuItem item2 = new MenuItem();
			item2.setId("manageUsers");
			item2.setText("Manage Users");
			item2.setLeaf(true);
			data.add(item2);
		}
		if (sessionUser.getRole().equals("Admin")
				|| sessionUser.getRole().equals("User")
				|| sessionUser.getRole().equals("PM")) {
			MenuItem item3 = new MenuItem();
			item3.setId("faiDfaiJob");
			item3.setText("Fai/DFai Job");
			item3.setLeaf(true);
			data.add(item3);
		}
		if (sessionUser.getRole().equals("Admin")
				|| sessionUser.getRole().equals("User")) {
			MenuItem item9 = new MenuItem();
			item9.setId("doneFaiDfaiJob");
			item9.setText("Done Fai/DFai Job");
			item9.setLeaf(true);
			data.add(item9);
		}
		if (sessionUser.getRole().equals("Admin")
				|| sessionUser.getRole().equals("User")) {
			MenuItem item4 = new MenuItem();
			item4.setId("otherJob");
			item4.setText("Other Job");
			item4.setLeaf(true);
			data.add(item4);
		}
		if (sessionUser.getRole().equals("Admin")
				|| sessionUser.getRole().equals("PM")) {
			MenuItem item4 = new MenuItem();
			item4.setId("jobRequest");
			item4.setText("Job Request");
			item4.setLeaf(true);
			data.add(item4);
		}
		if (sessionUser.getRole().equals("Admin")
				|| sessionUser.getRole().equals("User")
				|| sessionUser.getRole().equals("PM")) {
			MenuItem item5 = new MenuItem();
			item5.setId("machineList");
			item5.setText("Machine List");
			item5.setLeaf(true);
			data.add(item5);
		}
		if (!sessionUser.getRole().equals("ProdFP")) {
			MenuItem item6 = new MenuItem();
			item6.setId("toolList");
			item6.setText("Tool List");
			item6.setLeaf(true);
			data.add(item6);
		}
		if (sessionUser.getRole().equals("Admin")
				|| sessionUser.getRole().equals("User")
				|| sessionUser.getRole().equals("PM")
				|| sessionUser.getRole().equals("Prod")) {
			MenuItem item7 = new MenuItem();
			item7.setId("machineToolList");
			item7.setText("Machine Tool List");
			item7.setLeaf(true);
			data.add(item7);
		}
		if (sessionUser.getRole().equals("Admin")
				|| sessionUser.getRole().equals("User")
				|| sessionUser.getRole().equals("PM")) {
			MenuItem item8 = new MenuItem();
			item8.setId("documentList");
			item8.setText("Document List");
			item8.setLeaf(true);
			data.add(item8);
		}
		if (sessionUser.getRole().equals("Admin")
				|| sessionUser.getRole().equals("ProdFP")
				|| sessionUser.getRole().equals("PM")) {
			MenuItem item9 = new MenuItem();
			item9.setId("feedback");
			item9.setText("Feedback");
			item9.setLeaf(true);
			data.add(item9);
		}

		ResultData<MenuItem> resultData = new ResultData<MenuItem>();
		resultData.setData(data);
		try (PrintWriter out = response.getWriter()) {
			out.println(new Gson().toJson(resultData));
		}
	}

	@RequestMapping(value = "/createUpdateUser", method = RequestMethod.POST)
	public void createUpdateUser(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		response.setCharacterEncoding("UTF-8");
		User user = new User();
		user.setDuty(request.getParameter("duty"));
		user.setEmail(request.getParameter("email"));
		if (request.getParameter("id") != null
				&& !"".equals(request.getParameter("id"))) {
			user.setId(Integer.valueOf(request.getParameter("id")));
		}
		user.setLastName(request.getParameter("lastName"));
		user.setName(request.getParameter("name"));
		user.setRegisterNumber(request.getParameter("registerNumber"));
		user.setRole(request.getParameter("role"));
		user.setTelephone(request.getParameter("telephone"));
		user.setUserName(request.getParameter("userName"));

		userServiceDao.createUpdateUser(user);

		response.setStatus(HttpServletResponse.SC_OK);
		try (PrintWriter out = response.getWriter()) {
			out.print(new Gson().toJson(true));
		}
	}

	@RequestMapping(value = "/UpdateSessionUser", method = RequestMethod.POST)
	public void updateSessionUser(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		response.setCharacterEncoding("UTF-8");
		User user = new User();
		user.setDuty(request.getParameter("duty"));
		user.setEmail(request.getParameter("email"));
		user.setId(Integer.valueOf(request.getParameter("id")));
		user.setLastName(request.getParameter("lastName"));
		user.setName(request.getParameter("name"));
		user.setRegisterNumber(request.getParameter("registerNumber"));
		user.setTelephone(request.getParameter("telephone"));
		user.setUserName(request.getParameter("userName"));

		User sUser = userServiceDao.updateSessionUser(user);
		HttpSession session = request.getSession();
		session.setAttribute("sessionUser", sUser);

		response.setStatus(HttpServletResponse.SC_OK);
		try (PrintWriter out = response.getWriter()) {
			out.print(new Gson().toJson(true));
		}
	}

	@RequestMapping(value = "/getUsers", method = RequestMethod.POST)
	public void getUsers(HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		response.setCharacterEncoding("UTF-8");
		User sessionUser = (User) request.getSession().getAttribute(
				"sessionUser");
		List<User> users = userServiceDao.getUsers(sessionUser);
		List<UserItem> userItems = new ArrayList<UserItem>();
		for (User u : users) {
			UserItem ui = new UserItem();
			ui.setDuty(u.getDuty());
			ui.setEmail(u.getEmail());
			ui.setId(u.getId());
			ui.setLastName(u.getLastName());
			ui.setName(u.getName());
			ui.setRegisterNumber(u.getRegisterNumber());
			ui.setRole(u.getRole());
			ui.setTelephone(u.getTelephone());
			ui.setUserName(u.getUserName());
			userItems.add(ui);
		}
		ResultData<UserItem> resultData = new ResultData<UserItem>();
		resultData.setData(userItems);
		try (PrintWriter out = response.getWriter()) {
			out.println(new Gson().toJson(resultData));
		}

	}

	@RequestMapping(value = "/getComboUsers", method = RequestMethod.POST)
	public void getComboUsers(HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		response.setCharacterEncoding("UTF-8");
		List<User> users = userServiceDao.getAllUsers();
		List<ComboUserItem> userItems = new ArrayList<ComboUserItem>();
		for (User u : users) {
			ComboUserItem ui = new ComboUserItem();
			ui.setId(u.getId());
			ui.setNameSurname(u.getName() + " " + u.getLastName());
			userItems.add(ui);
		}
		ResultData<ComboUserItem> resultData = new ResultData<ComboUserItem>();
		resultData.setData(userItems);
		try (PrintWriter out = response.getWriter()) {
			out.println(new Gson().toJson(resultData));
		}

	}

	@RequestMapping(value = "/getComboFaiUsers", method = RequestMethod.POST)
	public void getComboFaiUsers(HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		response.setCharacterEncoding("UTF-8");
		List<User> users = userServiceDao.getAllUsers();
		List<ComboUserItem> userItems = new ArrayList<ComboUserItem>();
		ComboUserItem uii = new ComboUserItem();
		uii.setId(-1);
		uii.setNameSurname("All");
		userItems.add(uii);
		for (User u : users) {
			ComboUserItem ui = new ComboUserItem();
			ui.setId(u.getId());
			ui.setNameSurname(u.getName() + " " + u.getLastName());
			userItems.add(ui);
		}
		ResultData<ComboUserItem> resultData = new ResultData<ComboUserItem>();
		resultData.setData(userItems);
		try (PrintWriter out = response.getWriter()) {
			out.println(new Gson().toJson(resultData));
		}

	}

	@RequestMapping(value = "/getSessionUser", method = RequestMethod.POST)
	public void getSessionUser(HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		response.setCharacterEncoding("UTF-8");

		User sessionUser = (User) request.getSession().getAttribute(
				"sessionUser");
		List<UserItem> userItems = new ArrayList<UserItem>();
		UserItem ui = new UserItem();
		ui.setDuty(sessionUser.getDuty());
		ui.setEmail(sessionUser.getEmail());
		ui.setId(sessionUser.getId());
		ui.setLastName(sessionUser.getLastName());
		ui.setName(sessionUser.getName());
		ui.setPassword(sessionUser.getPassword());
		ui.setRegisterNumber(sessionUser.getRegisterNumber());
		ui.setRole(sessionUser.getRole());
		ui.setTelephone(sessionUser.getTelephone());
		ui.setUserName(sessionUser.getUserName());
		userItems.add(ui);

		ResultData<UserItem> resultData = new ResultData<UserItem>();
		resultData.setData(userItems);
		try (PrintWriter out = response.getWriter()) {
			out.println(new Gson().toJson(resultData));
		}

	}

	@RequestMapping(value = "/deleteUser", method = RequestMethod.POST)
	public void deleteUser(HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		response.setCharacterEncoding("UTF-8");
		Boolean result = false;
		if (!"".equals(request.getParameter("id"))
				&& request.getParameter("id") != null) {
			result = userServiceDao.deleteUser(Integer.valueOf(request
					.getParameter("id")));
		}
		response.setStatus(HttpServletResponse.SC_OK);
		try (PrintWriter out = response.getWriter()) {
			out.print(result);
		}
	}

	@RequestMapping(value = "/resetUserPassword", method = RequestMethod.POST)
	public void resetUserPassword(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		response.setCharacterEncoding("UTF-8");
		if (!"".equals(request.getParameter("id"))
				&& request.getParameter("id") != null) {
			userServiceDao.resetUserPassword(Integer.valueOf(request
					.getParameter("id")));
		}
	}

	@RequestMapping(value = "/changePassword", method = RequestMethod.POST)
	public void changePassword(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		response.setCharacterEncoding("UTF-8");
		String result = "";
		if (request.getParameter("newPassword").equals(
				request.getParameter("newPasswordRepeat"))) {
			User sessionUser = (User) request.getSession().getAttribute(
					"sessionUser");
			User u = userServiceDao.changePassword(sessionUser,
					request.getParameter("oldPassword"),
					request.getParameter("newPassword"));
			if (u != null) {
				result = "changed";
			} else {
				result = "oldNotMatched";
			}
		} else {
			result = "newNotMatched";
		}

		response.setStatus(HttpServletResponse.SC_OK);

		try (PrintWriter out = response.getWriter()) {
			out.print(result);
		}
	}

	@RequestMapping(value = "/createUpdateFaiDfaiJob", method = RequestMethod.POST)
	public void createUpdateFaiDfaiJob(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		response.setCharacterEncoding("UTF-8");
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		FaiDfaiJob fdj = new FaiDfaiJob();

		if (request.getParameter("id") != null
				&& !"".equals(request.getParameter("id"))) {
			fdj.setId(Integer.valueOf(request.getParameter("id")));
		}
		fdj.setKhCode(request.getParameter("khCode"));
		fdj.setMachineCode(request.getParameter("machineCode"));
		fdj.setProjectName(request.getParameter("projectName"));
		fdj.setCategory(request.getParameter("category"));
		fdj.setPeriod(request.getParameter("period"));
		fdj.setBenchPercentage(request.getParameter("benchPercentage"));
		fdj.setCatiaPercentage(request.getParameter("catiaPercentage"));
		fdj.setDescription(request.getParameter("description"));
		fdj.setDocumentPercentage(request.getParameter("documentPercentage"));
		fdj.setFixturePercentage(request.getParameter("fixturePercentage"));
		fdj.setBenchEnd(sdf.parse(request.getParameter("benchEnd")));
		fdj.setBenchStart(sdf.parse(request.getParameter("benchStart")));
		fdj.setCatiaEnd(sdf.parse(request.getParameter("catiaEnd")));
		fdj.setCatiaStart(sdf.parse(request.getParameter("catiaStart")));
		fdj.setDocumentEnd(sdf.parse(request.getParameter("documentEnd")));
		fdj.setDocumentStart(sdf.parse(request.getParameter("documentStart")));
		fdj.setDrpNumber(request.getParameter("drpNumber"));
		fdj.setFixtureEnd(sdf.parse(request.getParameter("fixtureEnd")));
		fdj.setFixtureStart(sdf.parse(request.getParameter("fixtureStart")));
		fdj.setPartNumber(request.getParameter("partNumber"));
		fdj.setResponsibleId(Integer.valueOf(request
				.getParameter("responsible")));
		if (request.getParameter("rawWidth") != null
				&& !"".equals(request.getParameter("rawWidth"))) {
			fdj.setRawWidth(Double.valueOf(request.getParameter("rawWidth")));
		}
		if (request.getParameter("rawLength") != null
				&& !"".equals(request.getParameter("rawLength"))) {
			fdj.setRawLength(Double.valueOf(request.getParameter("rawLength")));
		}
		if (request.getParameter("rawHeigth") != null
				&& !"".equals(request.getParameter("rawHeigth"))) {
			fdj.setRawHeigth(Double.valueOf(request.getParameter("rawHeigth")));
		}
		fdj.setMachineId(Integer.valueOf(request.getParameter("machine")));

		jobServiceDao.createUpdateFaiDfaiJob(fdj);

		response.setStatus(HttpServletResponse.SC_OK);
		try (PrintWriter out = response.getWriter()) {
			out.print(new Gson().toJson(true));
		}
	}

	@RequestMapping(value = "/createUpdateFaiControlList", method = RequestMethod.POST)
	public void createUpdateFaiControlList(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		response.setCharacterEncoding("UTF-8");
		FaiControlList i = new FaiControlList();
		Integer faiJobId = null;
		Integer setId = null;

		if (request.getParameter("id") != null
				&& !"".equals(request.getParameter("id"))) {
			i.setId(Integer.valueOf(request.getParameter("id")));
		}
		if (request.getParameter("faiJobId") != null
				&& !"".equals(request.getParameter("faiJobId"))) {
			faiJobId = Integer.valueOf(request.getParameter("faiJobId"));
		}

		if (request.getParameter("setupApRespId") != null
				&& !"".equals(request.getParameter("setupApRespId"))) {
			setId = Integer.valueOf(request.getParameter("setupApRespId"));
		}
		i.setListNumber(request.getParameter("listNumber") != null
				&& !"".equals(request.getParameter("listNumber")) ? Integer
				.valueOf(request.getParameter("listNumber")) : null);
		i.setOperationCode(request.getParameter("operationCode"));
		i.setCv11(request.getParameter("cv11") != null ? true : false);
		i.setCv12(request.getParameter("cv12") != null ? true : false);
		i.setCv13(request.getParameter("cv13") != null ? true : false);
		i.setCv14(request.getParameter("cv14") != null ? true : false);
		i.setCv15(request.getParameter("cv15") != null ? true : false);
		i.setCv21(request.getParameter("cv21") != null ? true : false);
		i.setCv22(request.getParameter("cv22") != null ? true : false);
		i.setFa11(request.getParameter("fa11") != null
				&& !"".equals(request.getParameter("fa11")) ? Double
				.valueOf(request.getParameter("fa11")) : null);
		i.setFa12(request.getParameter("fa12") != null
				&& !"".equals(request.getParameter("fa12")) ? Integer
				.valueOf(request.getParameter("fa12")) : null);
		i.setFa13(request.getParameter("fa13"));
		i.setFa14(request.getParameter("fa14"));
		i.setNc11(request.getParameter("nc11") != null ? true : false);
		i.setNc12(request.getParameter("nc12") != null ? true : false);
		i.setNc13(request.getParameter("nc13") != null ? true : false);
		i.setNc14(request.getParameter("nc14") != null ? true : false);
		i.setNc21(request.getParameter("nc21") != null ? true : false);
		i.setNo11(request.getParameter("no11"));
		i.setNo12(request.getParameter("no12"));
		i.setOb11(request.getParameter("ob11") != null ? true : false);
		i.setOb12(request.getParameter("ob12") != null ? true : false);
		i.setOb21(request.getParameter("ob21") != null ? true : false);
		i.setOb22(request.getParameter("ob22") != null ? true : false);
		i.setOb23(request.getParameter("ob23") != null ? true : false);
		i.setSe11(request.getParameter("se11") != null ? true : false);
		i.setSe12(request.getParameter("se12") != null ? true : false);
		i.setSe21(request.getParameter("se21") != null ? true : false);
		i.setSe22(request.getParameter("se22") != null ? true : false);
		i.setSe23(request.getParameter("se23") != null ? true : false);
		i.setSe24(request.getParameter("se24") != null ? true : false);
		i.setTa11(request.getParameter("ta11") != null ? true : false);
		i.setTa12(request.getParameter("ta12") != null ? true : false);
		i.setFlipNum(request.getParameter("flipNum") != null
				&& !"".equals(request.getParameter("flipNum")) ? Double
				.valueOf(request.getParameter("flipNum")) : null);
		i.setTakilonNum(request.getParameter("takilonNum") != null
				&& !"".equals(request.getParameter("takilonNum")) ? Double
				.valueOf(request.getParameter("takilonNum")) : null);
		i.setToolChange(request.getParameter("toolChange") != null
				&& !"".equals(request.getParameter("toolChange")) ? Double
				.valueOf(request.getParameter("toolChange")) : null);
		i.setStopTime(request.getParameter("stopTime") != null
				&& !"".equals(request.getParameter("stopTime")) ? Double
				.valueOf(request.getParameter("stopTime")) : null);
		i.setSimulTime(request.getParameter("simulTime") != null
				&& !"".equals(request.getParameter("simulTime")) ? Double
				.valueOf(request.getParameter("simulTime")) : null);
		i.setOfferTime(request.getParameter("offerTime") != null
				&& !"".equals(request.getParameter("offerTime")) ? Double
				.valueOf(request.getParameter("offerTime")) : null);
		i.setTotalTime(request.getParameter("totalTime") != null
				&& !"".equals(request.getParameter("totalTime")) ? Double
				.valueOf(request.getParameter("totalTime")) : null);

		jobServiceDao.createUpdateFaiControlList(i, faiJobId, setId);

		response.setStatus(HttpServletResponse.SC_OK);
		try (PrintWriter out = response.getWriter()) {
			out.print(new Gson().toJson(true));
		}
	}

	@RequestMapping(value = "/createUpdateJobRequest", method = RequestMethod.POST)
	public void createUpdateJobRequest(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		response.setCharacterEncoding("UTF-8");

		User sessionUser = (User) request.getSession().getAttribute(
				"sessionUser");
		FaiDfaiJob fdj = new FaiDfaiJob();

		if (request.getParameter("id") != null
				&& !"".equals(request.getParameter("id"))) {
			fdj.setId(Integer.valueOf(request.getParameter("id")));
		}
		fdj.setKhCode(request.getParameter("khCode"));
		fdj.setMachineId(Integer.valueOf(request.getParameter("machineCode")));
		fdj.setProjectName(request.getParameter("projectName"));
		fdj.setCategory(request.getParameter("category"));
		fdj.setPeriod(request.getParameter("period"));
		fdj.setDescription(request.getParameter("description"));
		fdj.setDrpNumber(request.getParameter("drpNumber"));
		fdj.setPartNumber(request.getParameter("partNumber"));

		jobServiceDao.createUpdateJobRequest(sessionUser.getId(), fdj);

		response.setStatus(HttpServletResponse.SC_OK);
		try (PrintWriter out = response.getWriter()) {
			out.print(new Gson().toJson(true));
		}
	}

	@RequestMapping(value = "/doneFaiDfaiJob", method = RequestMethod.POST)
	public void doneFaiDfaiJob(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		response.setCharacterEncoding("UTF-8");
		Integer id = null;
		Date doneDate = null;
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		if (request.getParameter("id") != null
				&& !"".equals(request.getParameter("id"))) {
			id = Integer.valueOf(request.getParameter("id"));
			doneDate = sdf.parse(request.getParameter("doneDate"));
		}

		jobServiceDao.doneFaiDfaiJob(id, doneDate);

	}

	@RequestMapping(value = "/getFaiDfaiJobs", method = RequestMethod.POST)
	public void getFaiDfaiJobs(HttpServletRequest request,
			HttpServletResponse response) throws IOException, ParseException {
		response.setCharacterEncoding("UTF-8");
		List<FaiDfaiJob> faiDfaiJobs;
		Integer userId = Integer.valueOf(request.getParameter("userId"));
		String period = request.getParameter("period");
		String projectName = request.getParameter("projectName");
		if (userId == 0) {
			User sessionUser = (User) request.getSession().getAttribute(
					"sessionUser");
			userId = sessionUser.getId();
		}

		faiDfaiJobs = jobServiceDao.getFaiDfaiJobs(userId, period, projectName);

		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

		List<FaiDfaiJobItem> faiDfaiJobItems = new ArrayList<FaiDfaiJobItem>();
		for (FaiDfaiJob f : faiDfaiJobs) {
			FaiDfaiJobItem fI = new FaiDfaiJobItem();
			fI.setKhCode(f.getKhCode());
			fI.setMachineCode(f.getMachineCode());
			fI.setProjectName(f.getProjectName());
			fI.setCategory(f.getCategory());
			fI.setPeriod(f.getPeriod());
			fI.setBenchEnd(sdf.format((f.getBenchEnd())));
			fI.setBenchPercentage(f.getBenchPercentage());
			fI.setBenchStart(sdf.format(f.getBenchStart()));
			fI.setCatiaEnd(sdf.format(f.getCatiaEnd()));
			fI.setCatiaPercentage(f.getCatiaPercentage());
			fI.setCatiaStart(sdf.format(f.getCatiaStart()));
			fI.setDescription(f.getDescription());
			fI.setDocumentEnd(sdf.format(f.getDocumentEnd()));
			fI.setDocumentPercentage(f.getDocumentPercentage());
			fI.setDocumentStart(sdf.format(f.getDocumentStart()));
			fI.setDrpNumber(f.getDrpNumber());
			fI.setFixtureEnd(sdf.format(f.getFixtureEnd()));
			fI.setFixturePercentage(f.getFixturePercentage());
			fI.setFixtureStart(sdf.format(f.getFixtureStart()));
			fI.setId(f.getId());
			fI.setPartNumber(f.getPartNumber());
			if (f.getResponsible() != null) {
				fI.setNameSurname(f.getResponsible().getName() + " "
						+ f.getResponsible().getLastName());
				fI.setResponsibleId(f.getResponsible().getId());
			}
			if (f.getMachine() != null) {
				fI.setMachineName(f.getMachine().getName());
				fI.setMachineId(f.getMachine().getId());
			}
			fI.setRawHeigth(f.getRawHeigth());
			fI.setRawLength(f.getRawLength());
			fI.setRawWidth(f.getRawWidth());

			faiDfaiJobItems.add(fI);
		}
		ResultData<FaiDfaiJobItem> resultData = new ResultData<FaiDfaiJobItem>();
		resultData.setData(faiDfaiJobItems);
		try (PrintWriter out = response.getWriter()) {
			out.println(new Gson().toJson(resultData));
		}
	}

	@RequestMapping(value = "/getFaiControlList", method = RequestMethod.POST)
	public void getFaiControlList(HttpServletRequest request,
			HttpServletResponse response) throws IOException, ParseException {
		response.setCharacterEncoding("UTF-8");

		Integer faiJobId = null;
		Integer listNumber = null;
		if (request.getParameter("faiJobId") != null
				&& !request.getParameter("faiJobId").isEmpty()) {
			faiJobId = Integer.valueOf(request.getParameter("faiJobId"));
		}

		if (request.getParameter("listNumber") != null
				&& !request.getParameter("listNumber").isEmpty()) {
			listNumber = Integer.valueOf(request.getParameter("listNumber"));
		}

		List<FaiControlList> faiControlList = jobServiceDao.getFaiControlList(
				faiJobId, listNumber);

		List<FaiControlListItem> faiControlListItems = new ArrayList<FaiControlListItem>();
		FaiControlListItem i;
		for (FaiControlList f : faiControlList) {
			i = new FaiControlListItem();

			i.setId(f.getId());
			if (f.getFaiJob() != null) {
				i.setFaiJobId(f.getFaiJob().getId());
			}
			if (f.getSetupApResp() != null) {
				i.setSetupApRespId(f.getSetupApResp().getId());
			}
			i.setListNumber(f.getListNumber());
			i.setOperationCode(f.getOperationCode());
			i.setCv11(f.getCv11());
			i.setCv12(f.getCv12());
			i.setCv13(f.getCv13());
			i.setCv14(f.getCv14());
			i.setCv15(f.getCv15());
			i.setCv21(f.getCv21());
			i.setCv22(f.getCv22());
			i.setFa11(f.getFa11());
			i.setFa12(f.getFa12());
			i.setFa13(f.getFa13());
			i.setFa14(f.getFa14());
			i.setNc11(f.getNc11());
			i.setNc12(f.getNc12());
			i.setNc13(f.getNc13());
			i.setNc14(f.getNc14());
			i.setNc21(f.getNc21());
			i.setNo11(f.getNo11());
			i.setNo12(f.getNo12());
			i.setOb11(f.getOb11());
			i.setOb12(f.getOb12());
			i.setOb21(f.getOb21());
			i.setOb22(f.getOb22());
			i.setOb23(f.getOb23());
			i.setSe11(f.getSe11());
			i.setSe12(f.getSe12());
			i.setSe21(f.getSe21());
			i.setSe22(f.getSe22());
			i.setSe23(f.getSe23());
			i.setSe24(f.getSe24());
			i.setTa11(f.getTa11());
			i.setTa12(f.getTa12());
			i.setFlipNum(f.getFlipNum());
			i.setTakilonNum(f.getTakilonNum());
			i.setToolChange(f.getToolChange());
			i.setStopTime(f.getStopTime());
			i.setSimulTime(f.getSimulTime());
			i.setOfferTime(f.getOfferTime());
			i.setTotalTime(f.getTotalTime());

			faiControlListItems.add(i);
		}
		ResultData<FaiControlListItem> resultData = new ResultData<FaiControlListItem>();
		resultData.setData(faiControlListItems);
		try (PrintWriter out = response.getWriter()) {
			out.println(new Gson().toJson(resultData));
		}
	}

	@RequestMapping(value = "/getJobRequests", method = RequestMethod.POST)
	public void getJobRequests(HttpServletRequest request,
			HttpServletResponse response) throws IOException, ParseException {
		response.setCharacterEncoding("UTF-8");
		List<FaiDfaiJob> faiDfaiJobs;
		Integer userId = Integer.valueOf(request.getParameter("userId"));
		String period = request.getParameter("period");
		String projectName = request.getParameter("projectName");
		if (userId == 0) {
			User sessionUser = (User) request.getSession().getAttribute(
					"sessionUser");
			userId = sessionUser.getId();
		}

		faiDfaiJobs = jobServiceDao.getJobRequests(userId, period, projectName);

		List<FaiDfaiJobItem> faiDfaiJobItems = new ArrayList<FaiDfaiJobItem>();
		for (FaiDfaiJob f : faiDfaiJobs) {
			FaiDfaiJobItem fI = new FaiDfaiJobItem();
			fI.setKhCode(f.getKhCode());
			fI.setMachineCode(f.getMachineCode());
			fI.setProjectName(f.getProjectName());
			fI.setCategory(f.getCategory());
			fI.setPeriod(f.getPeriod());
			fI.setDescription(f.getDescription());
			fI.setDrpNumber(f.getDrpNumber());
			fI.setId(f.getId());
			fI.setNameSurname(f.getResponsible().getName() + " "
					+ f.getResponsible().getLastName());
			fI.setResponsibleId(f.getResponsible().getId());
			fI.setPartNumber(f.getPartNumber());
			if (f.getMachine() != null) {
				fI.setMachineName(f.getMachine().getName());
				fI.setMachineId(f.getMachine().getId());
			}
			faiDfaiJobItems.add(fI);
		}
		ResultData<FaiDfaiJobItem> resultData = new ResultData<FaiDfaiJobItem>();
		resultData.setData(faiDfaiJobItems);
		try (PrintWriter out = response.getWriter()) {
			out.println(new Gson().toJson(resultData));
		}
	}

	@RequestMapping(value = "/getDoneFaiDfaiJobs", method = RequestMethod.POST)
	public void getDoneFaiDfaiJobs(HttpServletRequest request,
			HttpServletResponse response) throws IOException, ParseException {
		response.setCharacterEncoding("UTF-8");

		Integer userId = null;
		String partNumber = null;
		if (request.getParameter("userId") != null
				&& !"".equals(request.getParameter("userId"))) {
			userId = Integer.valueOf(request.getParameter("userId"));
			if (userId == 0) {
				User sessionUser = (User) request.getSession().getAttribute(
						"sessionUser");
				userId = sessionUser.getId();
			}
		}
		if (request.getParameter("partNumber") != null
				&& !"".equals(request.getParameter("partNumber"))) {
			partNumber = request.getParameter("partNumber");
		}
		List<FaiDfaiJob> faiDfaiJobs = jobServiceDao.getDoneFaiDfaiJobs(userId,
				partNumber);

		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

		List<FaiDfaiJobItem> faiDfaiJobItems = new ArrayList<FaiDfaiJobItem>();
		for (FaiDfaiJob f : faiDfaiJobs) {
			FaiDfaiJobItem fI = new FaiDfaiJobItem();
			fI.setKhCode(f.getKhCode());
			fI.setMachineCode(f.getMachineCode());
			fI.setProjectName(f.getProjectName());
			fI.setCategory(f.getCategory());
			fI.setPeriod(f.getPeriod());
			// if (f.getSetupApResp() != null) {
			// fI.setSetupApResp(f.getSetupApResp().getName() + " "
			// + f.getSetupApResp().getLastName());
			// }
			fI.setBenchEnd(sdf.format((f.getBenchEnd())));
			fI.setBenchPercentage(f.getBenchPercentage());
			fI.setBenchStart(sdf.format(f.getBenchStart()));
			fI.setCatiaEnd(sdf.format(f.getCatiaEnd()));
			fI.setCatiaPercentage(f.getCatiaPercentage());
			fI.setCatiaStart(sdf.format(f.getCatiaStart()));
			fI.setDescription(f.getDescription());
			fI.setDocumentEnd(sdf.format(f.getDocumentEnd()));
			fI.setDocumentPercentage(f.getDocumentPercentage());
			fI.setDocumentStart(sdf.format(f.getDocumentStart()));
			fI.setDrpNumber(f.getDrpNumber());
			fI.setFixtureEnd(sdf.format(f.getFixtureEnd()));
			fI.setFixturePercentage(f.getFixturePercentage());
			fI.setFixtureStart(sdf.format(f.getFixtureStart()));
			fI.setId(f.getId());
			fI.setNameSurname(f.getResponsible().getName() + " "
					+ f.getResponsible().getLastName());
			fI.setResponsibleId(f.getResponsible().getId());
			fI.setPartNumber(f.getPartNumber());
			// if (f.getSetupApResp() != null) {
			// fI.setSetupApRespId(f.getSetupApResp().getId());
			// }
			if (f.getDoneDate() != null) {
				fI.setDoneDate(sdf.format(f.getDoneDate()));
			}
			if (f.getMachine() != null) {
				fI.setMachineName(f.getMachine().getName());
			}
			faiDfaiJobItems.add(fI);
		}
		ResultData<FaiDfaiJobItem> resultData = new ResultData<FaiDfaiJobItem>();
		resultData.setData(faiDfaiJobItems);
		try (PrintWriter out = response.getWriter()) {
			out.println(new Gson().toJson(resultData));
		}
	}

	@RequestMapping(value = "/createUpdateOtherJob", method = RequestMethod.POST)
	public void createUpdateOtherJob(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		response.setCharacterEncoding("UTF-8");
		OtherJob oj = new OtherJob();
		Integer id;
		if (request.getParameter("id") != null
				&& !"".equals(request.getParameter("id"))) {
			oj.setId(Integer.valueOf(request.getParameter("id")));
		}
		oj.setDescription(request.getParameter("description"));
		oj.setJobDesc(request.getParameter("jobDesc"));
		id = Integer.valueOf(request.getParameter("responsible"));

		jobServiceDao.createUpdateOtherJob(id, oj);

		response.setStatus(HttpServletResponse.SC_OK);
		try (PrintWriter out = response.getWriter()) {
			out.print(new Gson().toJson(true));
		}
	}

	@RequestMapping(value = "/getOtherJobs", method = RequestMethod.POST)
	public void getOtherJobs(HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		response.setCharacterEncoding("UTF-8");
		List<OtherJob> otherJobs;
		Integer userId = Integer.valueOf(request.getParameter("userId"));
		if (userId == 0) {
			User sessionUser = (User) request.getSession().getAttribute(
					"sessionUser");
			otherJobs = jobServiceDao.getOtherJobs(sessionUser.getId());
		} else {
			otherJobs = jobServiceDao.getOtherJobs(userId);
		}

		List<OtherJobItem> otherJobItems = new ArrayList<OtherJobItem>();
		for (OtherJob o : otherJobs) {
			OtherJobItem oI = new OtherJobItem();
			oI.setId(o.getId());
			oI.setNameSurname(o.getResponsible().getName() + " "
					+ o.getResponsible().getLastName());
			oI.setResponsibleId(o.getResponsible().getId());
			oI.setDescription(o.getDescription());
			oI.setJobDesc(o.getJobDesc());
			otherJobItems.add(oI);
		}
		ResultData<OtherJobItem> resultData = new ResultData<OtherJobItem>();
		resultData.setData(otherJobItems);
		try (PrintWriter out = response.getWriter()) {
			out.println(new Gson().toJson(resultData));
		}
	}

	@RequestMapping(value = "/createUpdateAction", method = RequestMethod.POST)
	public void createUpdateAction(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		response.setCharacterEncoding("UTF-8");
		Action a = new Action();
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		if (request.getParameter("id") != null
				&& !"".equals(request.getParameter("id"))) {
			a.setId(Integer.valueOf(request.getParameter("id")));
		}
		a.setActionPercentage(request.getParameter("actionPercentage"));
		a.setActionDesc(request.getParameter("actionDesc"));
		a.setActionEnd(sdf.parse(request.getParameter("actionEnd")));
		a.setActionStart(sdf.parse(request.getParameter("actionStart")));

		jobServiceDao.createUpdateAction(
				Integer.valueOf(request.getParameter("jobId")), a);

		response.setStatus(HttpServletResponse.SC_OK);
		try (PrintWriter out = response.getWriter()) {
			out.print(new Gson().toJson(true));
		}
	}

	@RequestMapping(value = "/getActions", method = RequestMethod.POST)
	public void getActions(HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		response.setCharacterEncoding("UTF-8");
		Integer jobId = Integer.valueOf(request.getParameter("jobId"));
		List<Action> actions = jobServiceDao.getActions(jobId);

		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

		List<ActionItem> actionItems = new ArrayList<ActionItem>();
		for (Action a : actions) {
			ActionItem aI = new ActionItem();
			aI.setActionDesc(a.getActionDesc());
			aI.setActionEnd(sdf.format(a.getActionEnd()));
			aI.setActionPercentage(a.getActionPercentage());
			aI.setActionStart(sdf.format(a.getActionStart()));
			aI.setId(a.getId());
			aI.setJobId(a.getOtherJob().getId());
			actionItems.add(aI);
		}
		ResultData<ActionItem> resultData = new ResultData<ActionItem>();
		resultData.setData(actionItems);
		try (PrintWriter out = response.getWriter()) {
			out.println(new Gson().toJson(resultData));
		}
	}

	@RequestMapping(value = "/deleteFaiDfaiJob", method = RequestMethod.POST)
	public void deleteFaiDfaiJob(HttpServletRequest request,
			HttpServletResponse response) {
		response.setCharacterEncoding("UTF-8");
		if (!"".equals(request.getParameter("id"))
				&& request.getParameter("id") != null) {
			jobServiceDao.deleteFaiDfaiJob(Integer.valueOf(request
					.getParameter("id")));
		}
	}

	@RequestMapping(value = "/deleteOtherJob", method = RequestMethod.POST)
	public void deleteOtherJob(HttpServletRequest request,
			HttpServletResponse response) {
		response.setCharacterEncoding("UTF-8");
		if (!"".equals(request.getParameter("id"))
				&& request.getParameter("id") != null) {
			jobServiceDao.deleteOtherJob(Integer.valueOf(request
					.getParameter("id")));
		}
	}

	@RequestMapping(value = "/deleteAction", method = RequestMethod.POST)
	public void deleteAction(HttpServletRequest request,
			HttpServletResponse response) {
		response.setCharacterEncoding("UTF-8");
		if (!"".equals(request.getParameter("id"))
				&& request.getParameter("id") != null) {
			jobServiceDao.deleteAction(Integer.valueOf(request
					.getParameter("id")));
		}
	}

	@RequestMapping(value = "/createUpdateMachineToolList", method = RequestMethod.POST)
	public void createUpdateMachineToolList(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		response.setCharacterEncoding("UTF-8");
		MachineToolList m = new MachineToolList();
		if (request.getParameter("id") != null
				&& !"".equals(request.getParameter("id"))) {
			m.setId(Integer.valueOf(request.getParameter("id")));
		}
		m.setName(request.getParameter("name"));

		toolServiceDao.createUpdateMachineToolList(m);

		response.setStatus(HttpServletResponse.SC_OK);
		try (PrintWriter out = response.getWriter()) {
			out.print(true);
		}
	}

	@RequestMapping(value = "/getMachineToolLists", method = RequestMethod.POST)
	public void getMachineToolLists(HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		response.setCharacterEncoding("UTF-8");
		List<MachineToolList> machines = toolServiceDao.getMachineToolLists();

		List<MachineToolListItem> machineItems = new ArrayList<MachineToolListItem>();
		for (MachineToolList m : machines) {
			MachineToolListItem mI = new MachineToolListItem();
			mI.setId(m.getId());
			mI.setName(m.getName());
			machineItems.add(mI);
		}
		ResultData<MachineToolListItem> resultData = new ResultData<MachineToolListItem>();
		resultData.setData(machineItems);
		try (PrintWriter out = response.getWriter()) {
			out.println(new Gson().toJson(resultData));
		}
	}

	@RequestMapping(value = "/createUpdateTool", method = RequestMethod.POST)
	public void createUpdateTool(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		response.setCharacterEncoding("UTF-8");
		Tool t = new Tool();
		if (request.getParameter("id") != null
				&& !"".equals(request.getParameter("id"))) {
			t.setId(Integer.valueOf(request.getParameter("id")));
		}
		t.setAsmCode(request.getParameter("asmCode"));
		t.setAsmDefinition(request.getParameter("asmDefinition"));
		t.setCutterCode(request.getParameter("cutterCode"));
		t.setCutterDefinition(request.getParameter("cutterDefinition"));
		t.setDescription(request.getParameter("description"));
		if (request.getParameter("functionLength") != null
				&& !"".equals(request.getParameter("functionLength"))) {
			t.setFunctionLength(Double.valueOf(request
					.getParameter("functionLength")));
		}
		t.setHolderCode(request.getParameter("holderCode"));
		t.setHolderDefinition(request.getParameter("holderDefinition"));
		t.setExtensionCode(request.getParameter("extensionCode"));
		t.setExtensionDefinition(request.getParameter("extensionDefinition"));
		t.setShaftCode(request.getParameter("shaftCode"));
		t.setShaftDefinition(request.getParameter("shaftDefinition"));
		t.setInsertCode(request.getParameter("insertCode"));
		t.setInsertDefinition(request.getParameter("insertDefinition"));
		if (request.getParameter("offsetLength") != null
				&& !"".equals(request.getParameter("offsetLength"))) {
			t.setOffsetLength(Double.valueOf(request
					.getParameter("offsetLength")));
		}
		t.setToolOp(request.getParameter("toolOp"));
		t.setPartMaterial(request.getParameter("partMaterial"));

		toolServiceDao.createUpdateTool(t);

		response.setStatus(HttpServletResponse.SC_OK);
		try (PrintWriter out = response.getWriter()) {
			out.print(true);
		}
	}

	@RequestMapping(value = "/getTools", method = RequestMethod.POST)
	public void getTools(HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		response.setCharacterEncoding("UTF-8");
		MachineToolSearchParam searchParam = new MachineToolSearchParam();
		if (request.getParameter("asmCode") != null
				&& !"".equals(request.getParameter("asmCode"))) {
			searchParam.setAsmCode(request.getParameter("asmCode"));
		}
		if (request.getParameter("holderCode") != null
				&& !"".equals(request.getParameter("holderCode"))) {
			searchParam.setHolderCode(request.getParameter("holderCode"));
		}
		if (request.getParameter("holderDefinition") != null
				&& !"".equals(request.getParameter("holderDefinition"))) {
			searchParam.setHolderDefinition(request
					.getParameter("holderDefinition"));
		}
		if (request.getParameter("shaftCode") != null
				&& !"".equals(request.getParameter("shaftCode"))) {
			searchParam.setShaftCode(request.getParameter("shaftCode"));
		}
		if (request.getParameter("shaftDefinition") != null
				&& !"".equals(request.getParameter("shaftDefinition"))) {
			searchParam.setShaftDefinition(request
					.getParameter("shaftDefinition"));
		}
		if (request.getParameter("cutterCode") != null
				&& !"".equals(request.getParameter("cutterCode"))) {
			searchParam.setCutterCode(request.getParameter("cutterCode"));
		}
		if (request.getParameter("cutterDefinition") != null
				&& !"".equals(request.getParameter("cutterDefinition"))) {
			searchParam.setCutterDefinition(request
					.getParameter("cutterDefinition"));
		}
		if (request.getParameter("insertCode") != null
				&& !"".equals(request.getParameter("insertCode"))) {
			searchParam.setInsertCode(request.getParameter("insertCode"));
		}
		if (request.getParameter("insertDefinition") != null
				&& !"".equals(request.getParameter("insertDefinition"))) {
			searchParam.setInsertDefinition(request
					.getParameter("insertDefinition"));
		}
		if (request.getParameter("fLengthSmaller") != null
				&& !"".equals(request.getParameter("fLengthSmaller"))) {
			searchParam.setfLengthSmaller(Integer.valueOf(request
					.getParameter("fLengthSmaller")));
		}
		if (request.getParameter("fLengthBigger") != null
				&& !"".equals(request.getParameter("fLengthBigger"))) {
			searchParam.setfLengthBigger(Integer.valueOf(request
					.getParameter("fLengthBigger")));
		}
		if (request.getParameter("toolOp") != null
				&& !"".equals(request.getParameter("toolOp"))) {
			searchParam.setToolOp(request.getParameter("toolOp"));
		}
		if (request.getParameter("partMaterial") != null
				&& !"".equals(request.getParameter("partMaterial"))) {
			searchParam.setPartMaterial(request.getParameter("partMaterial"));
		}

		List<Tool> tools = toolServiceDao.getTools(searchParam);

		List<ToolItem> toolItems = new ArrayList<ToolItem>();
		for (Tool t : tools) {
			ToolItem tI = new ToolItem();
			tI.setId(t.getId());
			tI.setAsmCode(t.getAsmCode());
			tI.setAsmDefinition(t.getAsmDefinition());
			tI.setCutterCode(t.getCutterCode());
			tI.setCutterDefinition(t.getCutterDefinition());
			tI.setDescription(t.getDescription());
			tI.setFunctionLength(t.getFunctionLength());
			tI.setHolderCode(t.getHolderCode());
			tI.setHolderDefinition(t.getHolderDefinition());
			tI.setExtensionCode(t.getExtensionCode());
			tI.setExtensionDefinition(t.getExtensionDefinition());
			tI.setShaftCode(t.getShaftCode());
			tI.setShaftDefinition(t.getShaftDefinition());
			tI.setInsertCode(t.getInsertCode());
			tI.setInsertDefinition(t.getInsertDefinition());
			tI.setOffsetLength(t.getOffsetLength());
			tI.setToolOp(t.getToolOp());
			tI.setPartMaterial(t.getPartMaterial());
			toolItems.add(tI);
		}
		ResultData<ToolItem> resultData = new ResultData<ToolItem>();
		resultData.setData(toolItems);
		try (PrintWriter out = response.getWriter()) {
			out.println(new Gson().toJson(resultData));
		}
	}

	@RequestMapping(value = "/deleteTool", method = RequestMethod.POST)
	public void deleteTool(HttpServletRequest request,
			HttpServletResponse response) {
		response.setCharacterEncoding("UTF-8");
		if (!"".equals(request.getParameter("id"))
				&& request.getParameter("id") != null) {
			toolServiceDao.deleteTool(Integer.valueOf(request
					.getParameter("id")));
		}
	}

	@RequestMapping(value = "/getComboTools", method = RequestMethod.POST)
	public void getComboTools(HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		response.setCharacterEncoding("UTF-8");
		String asmCode = request.getParameter("query");
		List<Tool> tools = toolServiceDao.getComboTools(asmCode);
		List<ComboToolItem> toolItems = new ArrayList<ComboToolItem>();
		for (Tool t : tools) {
			ComboToolItem tI = new ComboToolItem();
			tI.setId(t.getId());
			tI.setAsmCode(t.getAsmCode());
			toolItems.add(tI);
		}
		ResultData<ComboToolItem> resultData = new ResultData<ComboToolItem>();
		resultData.setData(toolItems);
		try (PrintWriter out = response.getWriter()) {
			out.println(new Gson().toJson(resultData));
		}
	}

	@RequestMapping(value = "/createUpdateMachineTool", method = RequestMethod.POST)
	public void createUpdateMachineTool(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		response.setCharacterEncoding("UTF-8");
		MachineTool mt = new MachineTool();
		if (request.getParameter("id") != null
				&& !"".equals(request.getParameter("id"))) {
			mt.setId(Integer.valueOf(request.getParameter("id")));
		}
		mt.setToolNumber(request.getParameter("toolNumber"));

		toolServiceDao.createUpdateMachineTool(
				Integer.valueOf(request.getParameter("machineToolListId")),
				Integer.valueOf(request.getParameter("asmCode")), mt);

		response.setStatus(HttpServletResponse.SC_OK);
		try (PrintWriter out = response.getWriter()) {
			out.print(true);
		}
	}

	@RequestMapping(value = "/getMachineTools", method = RequestMethod.POST)
	public void getMachineTools(HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		response.setCharacterEncoding("UTF-8");
		MachineToolSearchParam searchParam = new MachineToolSearchParam();
		if (request.getParameter("machineToolListId") != null
				&& !"".equals(request.getParameter("machineToolListId"))) {
			searchParam.setMachineToolListId(Integer.valueOf(request
					.getParameter("machineToolListId")));
		}
		if (request.getParameter("asmCode") != null
				&& !"".equals(request.getParameter("asmCode"))) {
			searchParam.setAsmCode(request.getParameter("asmCode"));
		}
		if (request.getParameter("holderCode") != null
				&& !"".equals(request.getParameter("holderCode"))) {
			searchParam.setHolderCode(request.getParameter("holderCode"));
		}
		if (request.getParameter("holderDefinition") != null
				&& !"".equals(request.getParameter("holderDefinition"))) {
			searchParam.setHolderDefinition(request
					.getParameter("holderDefinition"));
		}
		if (request.getParameter("shaftCode") != null
				&& !"".equals(request.getParameter("shaftCode"))) {
			searchParam.setShaftCode(request.getParameter("shaftCode"));
		}
		if (request.getParameter("shaftDefinition") != null
				&& !"".equals(request.getParameter("shaftDefinition"))) {
			searchParam.setShaftDefinition(request
					.getParameter("shaftDefinition"));
		}
		if (request.getParameter("cutterCode") != null
				&& !"".equals(request.getParameter("cutterCode"))) {
			searchParam.setCutterCode(request.getParameter("cutterCode"));
		}
		if (request.getParameter("cutterDefinition") != null
				&& !"".equals(request.getParameter("cutterDefinition"))) {
			searchParam.setCutterDefinition(request
					.getParameter("cutterDefinition"));
		}
		if (request.getParameter("insertCode") != null
				&& !"".equals(request.getParameter("insertCode"))) {
			searchParam.setInsertCode(request.getParameter("insertCode"));
		}
		if (request.getParameter("insertDefinition") != null
				&& !"".equals(request.getParameter("insertDefinition"))) {
			searchParam.setInsertDefinition(request
					.getParameter("insertDefinition"));
		}
		if (request.getParameter("fLengthSmaller") != null
				&& !"".equals(request.getParameter("fLengthSmaller"))) {
			searchParam.setfLengthSmaller(Integer.valueOf(request
					.getParameter("fLengthSmaller")));
		}
		if (request.getParameter("fLengthBigger") != null
				&& !"".equals(request.getParameter("fLengthBigger"))) {
			searchParam.setfLengthBigger(Integer.valueOf(request
					.getParameter("fLengthBigger")));
		}
		if (request.getParameter("toolOp") != null
				&& !"".equals(request.getParameter("toolOp"))) {
			searchParam.setToolOp(request.getParameter("toolOp"));
		}
		if (request.getParameter("partMaterial") != null
				&& !"".equals(request.getParameter("partMaterial"))) {
			searchParam.setPartMaterial(request.getParameter("partMaterial"));
		}

		List<MachineTool> machineTools = toolServiceDao
				.getMachineTools(searchParam);

		List<MachineToolItem> machineToolItems = new ArrayList<MachineToolItem>();
		for (MachineTool t : machineTools) {
			MachineToolItem tI = new MachineToolItem();
			tI.setId(t.getId());
			tI.setMachineToolListId(t.getMachineToolList().getId());
			tI.setToolId(t.getTool().getId());
			tI.setToolNumber(t.getToolNumber());
			tI.setAsmCode(t.getTool().getAsmCode());
			tI.setPartMaterial(t.getTool().getPartMaterial());
			tI.setAsmDefinition(t.getTool().getAsmDefinition());
			tI.setCutterCode(t.getTool().getCutterCode());
			tI.setCutterDefinition(t.getTool().getCutterDefinition());
			tI.setDescription(t.getTool().getDescription());
			tI.setFunctionLength(t.getTool().getFunctionLength());
			tI.setHolderCode(t.getTool().getHolderCode());
			tI.setHolderDefinition(t.getTool().getHolderDefinition());
			tI.setExtensionCode(t.getTool().getExtensionCode());
			tI.setExtensionDefinition(t.getTool().getExtensionDefinition());
			tI.setShaftCode(t.getTool().getShaftCode());
			tI.setShaftDefinition(t.getTool().getShaftDefinition());
			tI.setInsertCode(t.getTool().getInsertCode());
			tI.setInsertDefinition(t.getTool().getInsertDefinition());
			tI.setOffsetLength(t.getTool().getOffsetLength());
			tI.setToolOp(t.getTool().getToolOp());
			machineToolItems.add(tI);
		}
		ResultData<MachineToolItem> resultData = new ResultData<MachineToolItem>();
		resultData.setData(machineToolItems);
		try (PrintWriter out = response.getWriter()) {
			out.println(new Gson().toJson(resultData));
		}
	}

	@RequestMapping(value = "/deleteMachineToolList", method = RequestMethod.POST)
	public void deleteMachineToolList(HttpServletRequest request,
			HttpServletResponse response) {
		response.setCharacterEncoding("UTF-8");
		if (!"".equals(request.getParameter("id"))
				&& request.getParameter("id") != null) {
			toolServiceDao.deleteMachineToolList(Integer.valueOf(request
					.getParameter("id")));
		}
	}

	@RequestMapping(value = "/deleteMachineTool", method = RequestMethod.POST)
	public void deleteMachineTool(HttpServletRequest request,
			HttpServletResponse response) {
		response.setCharacterEncoding("UTF-8");
		if (!"".equals(request.getParameter("id"))
				&& request.getParameter("id") != null) {
			toolServiceDao.deleteMachineTool(Integer.valueOf(request
					.getParameter("id")));
		}
	}

	@RequestMapping(value = "/createUpdateMachine", method = RequestMethod.POST)
	public void createUpdateMachine(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		response.setCharacterEncoding("UTF-8");
		Machine t = new Machine();
		if (request.getParameter("id") != null
				&& !"".equals(request.getParameter("id"))) {
			t.setId(Integer.valueOf(request.getParameter("id")));
		}
		t.setName(request.getParameter("name"));
		t.setType(request.getParameter("type"));

		toolServiceDao.createUpdateMachine(t);

		response.setStatus(HttpServletResponse.SC_OK);
		try (PrintWriter out = response.getWriter()) {
			out.print(true);
		}
	}

	@RequestMapping(value = "/getMachines", method = RequestMethod.POST)
	public void getMachines(HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		response.setCharacterEncoding("UTF-8");
		List<Machine> machines = toolServiceDao.getMachines();
		List<MachineItem> machineItems = new ArrayList<MachineItem>();
		for (Machine to : machines) {
			MachineItem t = new MachineItem();
			t.setId(to.getId());
			t.setName(to.getName());
			t.setType(to.getType());
			machineItems.add(t);
		}
		ResultData<MachineItem> resultData = new ResultData<MachineItem>();
		resultData.setData(machineItems);
		try (PrintWriter out = response.getWriter()) {
			out.println(new Gson().toJson(resultData));
		}
	}

	@RequestMapping(value = "/deleteMachine", method = RequestMethod.POST)
	public void deleteMachine(HttpServletRequest request,
			HttpServletResponse response) {
		response.setCharacterEncoding("UTF-8");
		if (!"".equals(request.getParameter("id"))
				&& request.getParameter("id") != null) {
			toolServiceDao.deleteMachine(Integer.valueOf(request
					.getParameter("id")));
		}
	}

	@RequestMapping(value = "/createUpdateDocument", method = RequestMethod.POST)
	public void createUpdateDocument(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		response.setCharacterEncoding("UTF-8");
		Document t = new Document();
		if (request.getParameter("id") != null
				&& !"".equals(request.getParameter("id"))) {
			t.setId(Integer.valueOf(request.getParameter("id")));
		}
		t.setDocName(request.getParameter("docName"));
		t.setDocNumber(request.getParameter("docNumber"));
		t.setDocType(request.getParameter("docType"));
		t.setKeyWord(request.getParameter("keyWord"));
		toolServiceDao.createUpdateDocument(t);

		response.setStatus(HttpServletResponse.SC_OK);
		try (PrintWriter out = response.getWriter()) {
			out.print(true);
		}
	}

	@RequestMapping(value = "/getDocuments", method = RequestMethod.POST)
	public void getDocuments(HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		response.setCharacterEncoding("UTF-8");
		String docType = null;
		String keyWord = null;
		String docName = null;
		if (request.getParameter("docType") != null
				&& !"".equals(request.getParameter("docType"))) {
			docType = request.getParameter("docType");
		}
		if (request.getParameter("keyWord") != null
				&& !"".equals(request.getParameter("keyWord"))) {
			keyWord = request.getParameter("keyWord");
		}
		if (request.getParameter("docName") != null
				&& !"".equals(request.getParameter("docName"))) {
			docName = request.getParameter("docName");
		}

		List<Document> documents = toolServiceDao.getDocuments(docType,
				keyWord, docName);
		List<DocumentItem> documentItems = new ArrayList<DocumentItem>();
		for (Document to : documents) {
			DocumentItem t = new DocumentItem();
			t.setId(to.getId());
			t.setDocName(to.getDocName());
			t.setDocNumber(to.getDocNumber());
			t.setDocType(to.getDocType());
			t.setKeyWord(to.getKeyWord());
			documentItems.add(t);
		}
		ResultData<DocumentItem> resultData = new ResultData<DocumentItem>();
		resultData.setData(documentItems);
		try (PrintWriter out = response.getWriter()) {
			out.println(new Gson().toJson(resultData));
		}
	}

	@RequestMapping(value = "/deleteDocument", method = RequestMethod.POST)
	public void deleteDocument(HttpServletRequest request,
			HttpServletResponse response) {
		response.setCharacterEncoding("UTF-8");
		if (!"".equals(request.getParameter("id"))
				&& request.getParameter("id") != null) {
			toolServiceDao.deleteDocument(Integer.valueOf(request
					.getParameter("id")));
		}
	}

	@RequestMapping(value = "/createUpdateUserSkill", method = RequestMethod.POST)
	public void createUpdateUserSkill(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		response.setCharacterEncoding("UTF-8");
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		UserSkill user = new UserSkill();
		if (request.getParameter("id") != null
				&& !"".equals(request.getParameter("id"))) {
			user.setId(Integer.valueOf(request.getParameter("id")));
		}
		user.setName(request.getParameter("name"));
		user.setSkore(request.getParameter("skore"));
		user.setTraining(request.getParameter("training"));
		if (request.getParameter("trainingDate") != null
				&& !"".equals(request.getParameter("trainingDate"))) {
			user.setTrainingDate(sdf.parse(request.getParameter("trainingDate")));
		}
		userServiceDao.createUpdateUserSkill(
				Integer.valueOf(request.getParameter("userId")), user);

		response.setStatus(HttpServletResponse.SC_OK);
		try (PrintWriter out = response.getWriter()) {
			out.print(new Gson().toJson(true));
		}
	}

	@RequestMapping(value = "/getUserSkills", method = RequestMethod.POST)
	public void getUserSkills(HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		response.setCharacterEncoding("UTF-8");
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		List<UserSkill> users = userServiceDao.getUserSkills(Integer
				.valueOf(request.getParameter("userId")));
		List<UserSkillItem> userItems = new ArrayList<UserSkillItem>();
		for (UserSkill u : users) {
			UserSkillItem ui = new UserSkillItem();
			ui.setId(u.getId());
			ui.setName(u.getName());
			ui.setSkore(u.getSkore());
			ui.setTraining(u.getTraining());
			if (u.getTrainingDate() != null) {
				ui.setTrainingDate(sdf.format(u.getTrainingDate()));
			}
			ui.setUserId(u.getUser().getId());

			userItems.add(ui);
		}
		ResultData<UserSkillItem> resultData = new ResultData<UserSkillItem>();
		resultData.setData(userItems);
		try (PrintWriter out = response.getWriter()) {
			out.println(new Gson().toJson(resultData));
		}

	}

	@RequestMapping(value = "/deleteUserSkill", method = RequestMethod.POST)
	public void deleteUserSkill(HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		response.setCharacterEncoding("UTF-8");
		Boolean result = false;
		if (!"".equals(request.getParameter("id"))
				&& request.getParameter("id") != null) {
			result = userServiceDao.deleteUserSkill(Integer.valueOf(request
					.getParameter("id")));
		}
		response.setStatus(HttpServletResponse.SC_OK);
		try (PrintWriter out = response.getWriter()) {
			out.print(result);
		}
	}

	@RequestMapping(value = "/getPdfFile", method = RequestMethod.GET)
	public void getPdfFile(HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		response.setCharacterEncoding("UTF-8");
		response.setContentType("application/pdf");
		String fileName = request.getParameter("fileName");

		File pdf = new File("C:\\Portal\\Doc\\" + fileName + ".pdf");
		response.setHeader("Content-Disposition", "inline; filename="
				+ fileName + ".pdf");
		response.setContentLength((int) pdf.length());
		FileInputStream in = new FileInputStream(pdf);
		OutputStream out = response.getOutputStream();
		byte[] buffer = new byte[1024];
		int len = in.read(buffer);
		while (len != -1) {
			out.write(buffer, 0, len);
			len = in.read(buffer);
		}
		in.close();
		out.close();
	}

	@RequestMapping(value = "/getImage", method = RequestMethod.GET)
	public void getImage(HttpServletRequest request,
			HttpServletResponse response) throws IOException {
		response.setCharacterEncoding("UTF-8");
		response.setContentType("image/jpeg");

		String imgName = request.getParameter("imgName");
		if (!StringUtils.isEmpty(imgName) && !imgName.contains(".")) {
			imgName += ".jpg";
		}
		File img = new File("C:\\Portal\\Img\\" + imgName);
		response.setHeader("Content-Disposition", "inline; filename=" + imgName);
		response.setContentLength((int) img.length());
		FileInputStream in = new FileInputStream(img);
		OutputStream out = response.getOutputStream();
		byte[] buffer = new byte[1024];
		int len = in.read(buffer);
		while (len != -1) {
			out.write(buffer, 0, len);
			len = in.read(buffer);
		}
		in.close();
		out.close();
	}

	@RequestMapping(value = "/getMachineTime", method = RequestMethod.POST)
	public void getMachineTime(HttpServletRequest request,
			HttpServletResponse response) throws IOException, ParseException {
		response.setCharacterEncoding("UTF-8");

		Integer machineId = null;
		if (request.getParameter("machineId") != null
				&& !request.getParameter("machineId").isEmpty()) {
			machineId = Integer.valueOf(request.getParameter("machineId"));
		}

		List<MachineTime> machineTimes = toolServiceDao
				.getMachineTime(machineId);

		List<MachineTimeItem> machineTimeItems = new ArrayList<MachineTimeItem>();
		MachineTimeItem i;
		for (MachineTime m : machineTimes) {
			i = new MachineTimeItem();

			i.setId(m.getId());
			if (m.getMachine() != null) {
				i.setMachineId(m.getMachine().getId());
			}
			i.setChange(m.getChange());
			i.setTakilon(m.getTakilon());
			i.setOp020b(m.getOp020b());
			i.setOp020k(m.getOp020k());
			i.setOp020o(m.getOp020o());
			i.setOp030b(m.getOp030b());
			i.setOp030k(m.getOp030k());
			i.setOp030o(m.getOp030o());

			machineTimeItems.add(i);
		}
		ResultData<MachineTimeItem> resultData = new ResultData<MachineTimeItem>();
		resultData.setData(machineTimeItems);
		try (PrintWriter out = response.getWriter()) {
			out.println(new Gson().toJson(resultData));
		}
	}

	@RequestMapping(value = "/createUpdateMachineTime", method = RequestMethod.POST)
	public void createUpdateMachineTime(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		response.setCharacterEncoding("UTF-8");
		MachineTime i = new MachineTime();
		Integer machineId = null;

		if (request.getParameter("id") != null
				&& !"".equals(request.getParameter("id"))) {
			i.setId(Integer.valueOf(request.getParameter("id")));
		}

		if (request.getParameter("machineId") != null
				&& !"".equals(request.getParameter("machineId"))) {
			machineId = Integer.valueOf(request.getParameter("machineId"));
		}
		i.setMachineId(machineId);
		i.setChange(request.getParameter("change") != null
				&& !"".equals(request.getParameter("change")) ? Double
				.valueOf(request.getParameter("change")) : null);
		i.setTakilon(request.getParameter("takilon") != null
				&& !"".equals(request.getParameter("takilon")) ? Double
				.valueOf(request.getParameter("takilon")) : null);
		i.setOp020b(request.getParameter("op020b") != null
				&& !"".equals(request.getParameter("op020b")) ? Double
				.valueOf(request.getParameter("op020b")) : null);
		i.setOp020k(request.getParameter("op020k") != null
				&& !"".equals(request.getParameter("op020k")) ? Double
				.valueOf(request.getParameter("op020k")) : null);
		i.setOp020o(request.getParameter("op020o") != null
				&& !"".equals(request.getParameter("op020o")) ? Double
				.valueOf(request.getParameter("op020o")) : null);
		i.setOp030b(request.getParameter("op030b") != null
				&& !"".equals(request.getParameter("op030b")) ? Double
				.valueOf(request.getParameter("op030b")) : null);
		i.setOp030k(request.getParameter("op030k") != null
				&& !"".equals(request.getParameter("op030k")) ? Double
				.valueOf(request.getParameter("op030k")) : null);
		i.setOp030o(request.getParameter("op030o") != null
				&& !"".equals(request.getParameter("op030o")) ? Double
				.valueOf(request.getParameter("op030o")) : null);

		toolServiceDao.createUpdateMachineTime(i);

		response.setStatus(HttpServletResponse.SC_OK);
		try (PrintWriter out = response.getWriter()) {
			out.print(new Gson().toJson(true));
		}
	}

	@RequestMapping(value = "/calculateFaiTotalTime", method = RequestMethod.POST)
	public void calculateFaiTotalTime(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		FaiControlListItem i = new FaiControlListItem();

		i.setFaiJobId(request.getParameter("faiJobId") != null
				&& !"".equals(request.getParameter("faiJobId")) ? Integer
				.valueOf(request.getParameter("faiJobId")) : null);
		i.setListNumber(request.getParameter("listNumber") != null
				&& !"".equals(request.getParameter("listNumber")) ? Integer
				.valueOf(request.getParameter("listNumber")) : null);
		i.setFlipNum(request.getParameter("flipNum") != null
				&& !"".equals(request.getParameter("flipNum")) ? Double
				.valueOf(request.getParameter("flipNum")) : 0);
		i.setTakilonNum(request.getParameter("takilonNum") != null
				&& !"".equals(request.getParameter("takilonNum")) ? Double
				.valueOf(request.getParameter("takilonNum")) : 0);
		i.setToolChange(request.getParameter("toolChange") != null
				&& !"".equals(request.getParameter("toolChange")) ? Double
				.valueOf(request.getParameter("toolChange")) : 0);
		i.setStopTime(request.getParameter("stopTime") != null
				&& !"".equals(request.getParameter("stopTime")) ? Double
				.valueOf(request.getParameter("stopTime")) : 0);
		i.setSimulTime(request.getParameter("simulTime") != null
				&& !"".equals(request.getParameter("simulTime")) ? Double
				.valueOf(request.getParameter("simulTime")) : 0);
		i.setOfferTime(request.getParameter("offerTime") != null
				&& !"".equals(request.getParameter("offerTime")) ? Double
				.valueOf(request.getParameter("offerTime")) : 0);
		i.setTotalTime(request.getParameter("totalTime") != null
				&& !"".equals(request.getParameter("totalTime")) ? Double
				.valueOf(request.getParameter("totalTime")) : 0);

		FaiDfaiJob job = jobServiceDao.getFaiDfaiJob(i.getFaiJobId());

		if (job.getRawHeigth() == null || job.getRawLength() == null
				|| job.getRawWidth() == null) {
			response.setStatus(HttpServletResponse.SC_NOT_FOUND);
			try (PrintWriter out = response.getWriter()) {
				out.print("Please, first fill raw material dimensions!");
			}
			return;
		}
		Double heigth = job.getRawHeigth() * 25.4;
		Double length = job.getRawLength() * 25.4;
		Double width = job.getRawWidth() * 25.4;

		Double size = ((heigth * length * width) / 1000000) * 2.7;
		Double flip = 0.0;
		MachineTime mTime = null;

		List<MachineTime> machineTimes = toolServiceDao.getMachineTime(job
				.getMachineId());

		if (machineTimes != null && !machineTimes.isEmpty()) {
			mTime = machineTimes.get(0);
		}

		if (mTime != null && mTime.getChange() != null
				&& mTime.getOp020b() != null && mTime.getOp020o() != null
				&& mTime.getOp020k() != null && mTime.getOp030k() != null
				&& mTime.getOp030o() != null && mTime.getOp030b() != null) {
			if (i.getListNumber() == 1) {
				if (size <= 30) {
					flip = mTime.getOp020k();
				} else if (size > 30 && size <= 250) {
					flip = mTime.getOp020o();
				} else {
					flip = mTime.getOp020b();
				}
			} else {
				if (size <= 30) {
					flip = mTime.getOp030k();
				} else if (size > 30 && size <= 250) {
					flip = mTime.getOp030o();
				} else {
					flip = mTime.getOp030b();
				}
			}
			if (flip == 0) {
				flip = 1.0;
			}
		} else {
			response.setStatus(HttpServletResponse.SC_NOT_FOUND);
			try (PrintWriter out = response.getWriter()) {
				out.print("Please, first fill machine times!");
			}
			return;
		}

		Double d10 = (i.getFlipNum() + 1) * flip;
		Double d11 = i.getTakilonNum() * mTime.getTakilon();
		Double d12 = i.getToolChange() * mTime.getChange();
		Double d13 = i.getStopTime();
		Double b14 = i.getSimulTime();

		Double totalTime = d10 + d11 + d12 + d13 + b14;

		response.setStatus(HttpServletResponse.SC_OK);
		try (PrintWriter out = response.getWriter()) {
			out.print(totalTime);
		}
	}

	@RequestMapping(value = "/createUpdateFeedback", method = RequestMethod.POST)
	public void createUpdateFeedback(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		response.setCharacterEncoding("UTF-8");
		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");
		Feedback fd = new Feedback();

		if (request.getParameter("id") != null
				&& !"".equals(request.getParameter("id"))) {
			fd.setId(Integer.valueOf(request.getParameter("id")));
		}
		fd.setProjectName(request.getParameter("projectName"));
		fd.setPartNumber(request.getParameter("partNumber"));
		fd.setKhCode(request.getParameter("khCode"));
		fd.setPdkNo(request.getParameter("pdkNo"));
		fd.setFeedbackDate(sdf.parse(request.getParameter("feedbackDate")));
		fd.setDescription(request.getParameter("description"));
		fd.setImageName(request.getParameter("imageName"));
		fd.setFeedbackStatus(request.getParameter("feedbackStatus"));
		if (request.getParameter("responsible") != null
				&& !"".equals(request.getParameter("responsible"))) {
			fd.setResponsibleId(Integer.valueOf(request
					.getParameter("responsible")));
		}
		if (request.getParameter("feedbackProvider") != null
				&& !"".equals(request.getParameter("feedbackProvider"))) {
			fd.setFeedbackProviderId(Integer.valueOf(request
					.getParameter("feedbackProvider")));
		}

		jobServiceDao.createUpdateFeedback(fd);

		response.setStatus(HttpServletResponse.SC_OK);
		try (PrintWriter out = response.getWriter()) {
			out.print(new Gson().toJson(true));
		}
	}

	@RequestMapping(value = "/getFeedbacks", method = RequestMethod.POST)
	public void getFeedbacks(HttpServletRequest request,
			HttpServletResponse response) throws IOException, ParseException {
		response.setCharacterEncoding("UTF-8");
		Integer userId = Integer.valueOf(request.getParameter("userId"));
		if (userId == 0) {
			User sessionUser = (User) request.getSession().getAttribute(
					"sessionUser");
			userId = sessionUser.getId();
		}

		List<Feedback> feedbacks = jobServiceDao.getFeedbacks(userId);

		SimpleDateFormat sdf = new SimpleDateFormat("dd/MM/yyyy");

		List<FeedbackItem> feedbackItems = new ArrayList<FeedbackItem>();
		for (Feedback f : feedbacks) {
			FeedbackItem fI = new FeedbackItem();
			fI.setId(f.getId());
			fI.setProjectName(f.getProjectName());
			fI.setPartNumber(f.getPartNumber());
			fI.setKhCode(f.getKhCode());
			fI.setPdkNo(f.getPdkNo());
			fI.setFeedbackDate(sdf.format(f.getFeedbackDate()));
			fI.setDescription(f.getDescription());
			fI.setImageName(f.getImageName());
			fI.setFeedbackStatus(f.getFeedbackStatus());
			if (f.getResponsible() != null) {
				fI.setResponsibleName(f.getResponsible().getName() + " "
						+ f.getResponsible().getLastName());
				fI.setResponsibleId(f.getResponsible().getId());
			}
			if (f.getFeedbackProvider() != null) {
				fI.setFeedbackProviderName(f.getFeedbackProvider().getName()
						+ " " + f.getFeedbackProvider().getLastName());
				fI.setFeedbackProviderId(f.getFeedbackProvider().getId());
			}

			feedbackItems.add(fI);
		}
		ResultData<FeedbackItem> resultData = new ResultData<FeedbackItem>();
		resultData.setData(feedbackItems);
		try (PrintWriter out = response.getWriter()) {
			out.println(new Gson().toJson(resultData));
		}
	}

	@RequestMapping(value = "/deleteFeedback", method = RequestMethod.POST)
	public void deleteFeedback(HttpServletRequest request,
			HttpServletResponse response) {
		response.setCharacterEncoding("UTF-8");
		if (!"".equals(request.getParameter("id"))
				&& request.getParameter("id") != null) {
			jobServiceDao.deleteFeedback(Integer.valueOf(request
					.getParameter("id")));
		}
	}

	@RequestMapping(value = "/feedBackUploadImage", method = RequestMethod.POST)
	public void feedBackUploadImage(HttpServletRequest request,
			HttpServletResponse response) throws Exception {
		// set content type
		response.setContentType("text/html");

		DiskFileItemFactory fileItemFactory = new DiskFileItemFactory();

		String fileName = "";

		// Set the temporary directory to store the uploaded files of size above
		// threshold.
		fileItemFactory.setRepository(new File("C:\\Portal\\Img"));

		ServletFileUpload uploadHandler = new ServletFileUpload(fileItemFactory);

		// Parse the request
		List items = uploadHandler.parseRequest(request);
		Iterator iterator = items.iterator();
		while (iterator.hasNext()) {
			FileItem item = (FileItem) iterator.next();

			// Handle Form Fields
			if (item.isFormField()) {
			} else {
				fileName = item.getName();

				// Write file to the ultimate location.
				File file = new File("C:\\Portal\\Img", item.getName());
				item.write(file);
			}

		}

		JsonObject js = new JsonObject();
		js.addProperty("success", true);
		js.addProperty("fileName", fileName);

		PrintWriter out = response.getWriter();
		out.print(js);

	}
}