export default class AllService {
  constructor () {
    this.host = process.env.testHost
    this.fileHost = process.env.fileHost
    this.method = {
      signIn: '/user/signIn',
      addMessage: '/employee/add',
      signUp: '/user/signUp',
      getEmployeeByNature_work:'/employee/findByNature_work',
      getEmployeeByNature_workConnect:'/employee/findByNature_workConnect',
      getEmployeeBySituation:'/employee/findBySituation',
      getEmployeeBySituationConnect:'/employee/findBySituationConnect',
      getAllEmployee:'/employee/findAllEmployee',
      getEmployeeVague:'/employee/findEmployeeVague',
      updateEmployee:'/employee/update',
      deleteEmployee:'/employee/delete',
      getAllEducationLevel:'/education_level/findAllLevel',
      getAllPostName:'/post/findAllPost',
      getAllRank:'/rank/findAllRank',
      getAllDepartName:'/depart/findAllDepart',
      getDepartVague:'/depart/findDepartVague',
      updateDepart:'/depart/update',
      addDepart:'/depart/add',
      deleteDepart:'/depart/delete',
      setWage:'/wage_rules/update',
      setSalary:'/rank/update',
      getAllSalary:'/stuffsalary/findAllSalary',
      salaryCalculate:'/stuffsalary/salarycalculate',

      getOrderDetailByStudentId: '/order/findByStudentId',
      getOrderDetailByTeacherId: '/order/findByTeacherId',
      getTimeSlotDetail: '/timeSlot/find',
      getTimeSlotByTeacherId: '/timeSlot/findByTeacherId',
      deleteOrder: '/order/delete',
      addTimeSlot: '/timeslot/add',
      deleteTimeSlotById: '/timeSlot/delete',
      getTeacherTable: '/teacher/findAllTeacher',
      addOrder: '/order/add',

      deleteMessage: '/message/delete',
      getTeacherByName: '/teacher/findTeacherByName',
      getAllDepart: '/depart/findAll',
      getAllMessage: '/message/findAll',
      updateStudent:'/student/updateAll',
      updateTeacher:'/teacher/updateAll',
      updatePassword:'/user/changePassword',
      getUserInfo:'/user/findByUserId',
      getStudentDetailBN: '/student/findStudentByName',
      getTeacherDetailBN: '/teacher/findTeacherByName',
      updateStudentImage: '/student/updateImage',
      updateTeacherImage: '/teacher/updateImage',
      getStudentDetailById: '/student/findStudentById',
      getTeacherDetailById: '/teacher/findTeacherById',
      blurSearchTeacher: '/teacher/findTeacherVague',
      searchTeacherByDepart: '/teacher/findTeacherByDepart',
      checkUserName: '/user/checkUserName',
      getAllStudent: '/student/findAll',
      deleteStudentByDepart: '/student/deleteByDepart',
      deleteAllStudent: '/student/deleteAll',
      searchStudentByDepart: '/student/findStudentByDepart',
      deleteStudentById: '/student/deleteStudent',
      addStudent: '/student/addStudent',
    }
  }

  ajaxRequest (url, sendData, type, callback, contentType) {
    var result
    $.ajax({
      url: url,
      type: type || 'GET',
      contentType: contentType === undefined ? 'application/x-www-form-urlencoded' : contentType,
      data: contentType == 'application/json' ? JSON.stringify(sendData) : sendData,
      timeout: 60000,
      complete: function () {},
      success: function (data, textStatus) {
        try {
          if (callback) {
            callback(null, data)
          }
          result = data
        } catch (e) {
          console.log(e)
        }
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        try {
          if (callback) {
            callback(textStatus || new Error(FDPX.MSG.NET_ERROR), XMLHttpRequest)
          }
        } catch (e) {
          console.log(e)
        }
      }
    })
    return result
  }

  bizRequest (url, sendData, type, callback, contentType) {
    var result = null
    this.ajaxRequest(url, sendData, type, function (err, data) {
      if (!err) {
        if (data) {
          //成功，更新token
          if (data.status == true || data.status == '200') {
            result = data
            data.status = true
          }
          if (data.status == false || data.status !== '200') {
            console.log(data && data.message ? data.message : FDPX.MSG.NET_NO_DATA)
          }
          if (callback) {
            callback(data.status, data)
          }
        } else {
          if (callback) {
            callback(false, {message: '服务器好像出现了点问题'})
          }
        }
      } else {
        console.log('bizRequest error : ' + err)
      }
    }, contentType)
    return result
  }

  signIn(params, callback) {
    var url = this.host + this.method.signIn;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  addMessage(params,callback){
    var url = this.host + this.method.addMessage;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  signUp(params, callback) {
    var url = this.host + this.method.signUp;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }

  getEmployeeByNature_work(params, callback){
    var url = this.host + this.method.getEmployeeByNature_work;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }

  getEmployeeByNature_workConnect(params, callback){
    var url = this.host + this.method.getEmployeeByNature_workConnect;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }

  getEmployeeBySituation(params, callback){
    var url = this.host + this.method.getEmployeeBySituation;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }

  getEmployeeBySituationConnect(params, callback){
    var url = this.host + this.method.getEmployeeBySituationConnect;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }

  getAllEmployee(params,callback){
    var url = this.host + this.method.getAllEmployee;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }

  getAllEducationLevel(params,callback){
    var url = this.host + this.method.getAllEducationLevel;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }

  getAllPostName(params,callback){
    var url = this.host + this.method.getAllPostName;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  getAllRank(params,callback){
    var url = this.host + this.method.getAllRank;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  getAllDepartName(params,callback){
    var url = this.host + this.method.getAllDepartName;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  addDepart(params,callback){
    var url = this.host + this.method.addDepart;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  setWage(params,callback){
    var url = this.host + this.method.setWage;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  setSalary(params,callback){
    var url = this.host + this.method.setSalary;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }

  getAllSalary(params,callback){
    var url = this.host + this.method.getAllSalary;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  salaryCalculate(params,callback){
    var url = this.host + this.method.salaryCalculate;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  updateDepart(params,callback){
    var url = this.host + this.method.updateDepart;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  deleteDepart(params,callback){
    var url = this.host + this.method.deleteDepart;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  getDepartVague(params,callback){
    var url = this.host + this.method.getDepartVague;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  getEmployeeVague(params,callback){
    var url = this.host + this.method.getEmployeeVague;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  updateEmployee(params,callback){
    var url = this.host + this.method.updateEmployee;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  deleteEmployee(params,callback){
    var url = this.host + this.method.deleteEmployee;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
/****** 方法的具体实现 不能只填写上方字典的方法名    *****/

  getOrderDetailByStudentId(params, callback){
    var url = this.host + this.method.getOrderDetailByStudentId;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }

  getOrderDetailByTeacherId(params, callback){
    var url = this.host + this.method.getOrderDetailByTeacherId;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  getTimeSlotDetail(params, callback){
    var url = this.host + this.method.getTimeSlotDetail;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  getTimeSlotByTeacherId(params, callback){
    var url = this.host + this.method.getTimeSlotByTeacherId;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  deleteOrder(params,callback){
    var url = this.host + this.method.deleteOrder;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  addTimeSlot(params,callback){
    var url = this.host + this.method.addTimeSlot;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  deleteTimeSlotById(params,callback){
    var url = this.host + this.method.deleteTimeSlotById;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  getTeacherTable(params,callback){
    var url = this.host + this.method.getTeacherTable;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  addOrder(params,callback){
    var url = this.host + this.method.addOrder;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  getAllMessage(params,callback){
    var url = this.host + this.method.getAllMessage;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }

  updatePassword(params,callback){
    var url = this.host + this.method.updatePassword;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  updateStudent(params,callback){
    var url = this.host + this.method.updateStudent;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  updateTeacher(params,callback){
    var url = this.host + this.method.updateTeacher;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }

  getUserInfo(params,callback){
    var url = this.host + this.method.getUserInfo;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  updateStudentImage(params,callback){
    var url = this.host + this.method.updateStudentImage;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  updateTeacherImage(params,callback){
    var url = this.host + this.method.updateTeacherImage;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  getTeacherByName(params,callback){
    var url = this.host + this.method.getTeacherByName;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  blurSearchTeacher(params,callback){
    var url = this.host + this.method.blurSearchTeacher;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  searchTeacherByDepart(params,callback){
    var url = this.host + this.method.searchTeacherByDepart;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  getAllDepart(params,callback){
    var url = this.host + this.method.getAllDepart;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  getStudentDetailBN(params,callback){
    var url = this.host + this.method.getStudentDetailBN;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  getTeacherDetailBN(params,callback){
    var url = this.host + this.method.getTeacherDetailBN;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  getStudentDetailById(params,callback){
    var url = this.host + this.method.getStudentDetailById;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  checkUserName(params,callback){
    var url = this.host + this.method.checkUserName;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  getTeacherDetailById(params,callback){
    var url = this.host + this.method.getTeacherDetailById;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  deleteMessage(params,callback){
    var url = this.host + this.method.deleteMessage;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  getAllStudent(params,callback){
    var url = this.host + this.method.getAllStudent;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  deleteStudentByDepart(params,callback){
    var url = this.host + this.method.deleteStudentByDepart;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  deleteAllStudent(params,callback){
    var url = this.host + this.method.deleteAllStudent;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  searchStudentByDepart(params,callback){
    var url = this.host + this.method.searchStudentByDepart;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  deleteStudentById(params,callback){
    var url = this.host + this.method.deleteStudentById;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
  addStudent(params,callback){
    var url = this.host + this.method.addStudent;
    var type = 'post';
    return this.bizRequest(url, params, type, function(isOk, data) {
      if (callback) {
        callback(isOk, data);
      }
    }, "application/json");
  }
}
