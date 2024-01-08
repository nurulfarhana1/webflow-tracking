console.log("Tracking Page Webflow");
$("#tracking_result_section").css("display", "none");
$("#tracking_submit_btn").click(function (event) {
  hide_Tracking_Result_Section();
  event.preventDefault();
  if ($("#tracking_no_input").val() === "") {
    alert("Empty Tracking Value");
  } else {
    checkTrackingNoAPI($("#tracking_no_input").val());
  }
});
function checkTrackingNoAPI(tracking_no) {
  var request = new XMLHttpRequest();
  request.open("POST", 'https://api.parceldaily.com/track/'+ tracking_no.toString());
  request.setRequestHeader("Content-Type", "application/json");
  request.setRequestHeader("Accept", "application/json");
  request.setRequestHeader("token", "950af98c-f033-4cdd-ae8a-82db543a3efe");
  request.onreadystatechange = function () {
    if (this.readyState === 4) {
      let obj = JSON.parse(this.response);
      if (!obj.message) {
        let serviceProvider = Object.keys(obj)[0];
        $("#provider_shortcode").text(serviceProvider);
        $("#tracking_no").text($("#tracking_no_input").val());
        tracking_data_mappping(obj);
        display_Tracking_Result_Section();
        $("#tracking_result_text").text(serviceProvider);
      } else if (obj.message) {
        $("#not_found").fadeIn();
        $("#not_found").fadeIn("slow");
      }
    }
  };
  var body = {
    connote: tracking_no.toString(),
  };
  request.send(JSON.stringify(body));
}
function tracking_data_mappping(data) {
  console.log(data);
  if (Object.keys(data)[0] == "ninjavan") {
    $("#provider_logo").attr(
      "src",
      "https://uploads-ssl.webflow.com/614181d8fe44199cfe2e6f82/614438faa5ac55919b7a007d_nv-logo-top-sg.svg"
    );
    $("#provider_link").attr("href", "https://www.ninjavan.co/en-my");
    $("#provider_title").text("ninjavan");
    $("#provider_shortcode").text("ninjavan");
    tracking_data_mapping2(data);
  }
  if (Object.keys(data)[0] == "poslaju") {
    $("#provider_logo").attr(
      "src",
      "https://uploads-ssl.webflow.com/614181d8fe44199cfe2e6f82/6148c796caa3fccc31902213_poslaju-logo.svg"
    );
    $("#provider_link").attr("href", "https://www.pos.com.my/");
    $("#provider_title").text("PosLaju");
    $("#provider_shortcode").text("PosLaju");
    tracking_data_mapping2_poslaju(data);
  }
  if (Object.keys(data)[0] == "jnt") {
    $("#provider_logo").attr(
      "src",
      "https://uploads-ssl.webflow.com/614181d8fe44199cfe2e6f82/614438fa14c53d4a469fc0bf_Layer_x0020_1.svg"
    );
    $("#provider_link").attr("href", "http://www.jtexpress.my/");
    $("#provider_title").text("J&T");
    $("#provider_shortcode").text("J&T");
    tracking_data_mapping2_jnt(data);
  }
  if (Object.keys(data)[0] == "dhl") {
    $("#provider_logo").attr(
      "src",
      "https://uploads-ssl.webflow.com/614181d8fe44199cfe2e6f82/614438f94ffeaecc5d6b2c82_partner_dhl.svg"
    );
    $("#provider_link").attr(
      "href",
      "https://ecommerceportal.dhl.com/track/pages/customer/trackItNowPublic.xhtml"
    );
    $("#provider_title").text("DHL");
    $("#provider_shortcode").text("DHL");
    tracking_data_mapping2_dhl(data);
  }
  if (Object.keys(data)[0] == "citylink") {
    $("#provider_logo").attr(
      "src",
      "https://uploads-ssl.webflow.com/614181d8fe44199cfe2e6f82/6187900d78a5787aaa91872c_citylink.svg"
    );
    $("#provider_link").attr("href", "http://www.citylinkexpress.com/");
    $("#provider_title").text("CITY-LINK");
    $("#provider_shortcode").text("CITY-LINK");
    tracking_data_mapping2_citylink(data);
  }
  if (Object.keys(data)[0] == "pickupp") {
    $("#provider_logo").attr(
      "src",
      "https://uploads-ssl.webflow.com/614181d8fe44199cfe2e6f82/618e1908d5261861b4b901e1_pickupplogo.png"
    );
    $("#provider_link").attr("href", "http://my.pickupp.io/");
    $("#provider_title").text("pickupp");
    $("#provider_shortcode").text("pickupp");
    tracking_data_mapping2_pickupp(data);
  }
  if (Object.keys(data)[0] == "teleport") {
    $("#provider_logo").attr(
      "src",
      "https://uploads-ssl.webflow.com/614181d8fe44199cfe2e6f82/622edd8360f8f56fadedbdea_568a9ea.svg"
    );
    $("#provider_link").attr("href", "https://www.teleport.asia/en/my");
    $("#provider_title").text("Teleport");
    $("#provider_shortcode").text("Teleport");
    tracking_data_mapping2_teleport(data);
  }
  if (Object.keys(data)[0] == "sfstandard") {
    $("#provider_logo").attr(
      "src",
      "https://uploads-ssl.webflow.com/614181d8fe44199cfe2e6f82/624549ca6cba64e2d67b4708_SF_Express_Logo.png"
    );
    $("#provider_link").attr("href", "https://www.sf-express.com");
    $("#provider_title").text("SF Standard");
    $("#provider_shortcode").text("SF Standard");
    tracking_data_mapping2_sfstandard(data);
  }
  if (Object.keys(data)[0] == "flash") {
    $("#provider_logo").attr(
      "src",
      "https://uploads-ssl.webflow.com/614181d8fe44199cfe2e6f82/6245498111b57236d6809d25_logo%402x.png"
    );
    $("#provider_link").attr("href", "https://www.flashexpress.my/");
    $("#provider_title").text("Flash");
    $("#provider_shortcode").text("Flash");
    tracking_data_mapping2_flash(data);
  }
  if (Object.keys(data)[0] == "lineclear") {
    $("#provider_logo").attr(
      "src",
      "https://uploads-ssl.webflow.com/614181d8fe44199cfe2e6f82/654088e3f017ae5a7a568111_lineclear.png"
    );
    $("#provider_link").attr("href", "https://lineclearexpress.com/tracker");
    $("#provider_title").text("Lineclear");
    $("#provider_shortcode").text("Lineclear");
    tracking_data_mapping2_lineclear(data);
  }
  if (Object.keys(data)[0] == "best") {
    $("#provider_logo").attr(
      "src",
      "https://uploads-ssl.webflow.com/614181d8fe44199cfe2e6f82/6540786bfa7ea7efe543e75d_best-express-logo.png"
    );
    $("#provider_link").attr("href", "https://www.best-inc.my/track");
    $("#provider_title").text("Best Express");
    $("#provider_shortcode").text("Best Express");
    tracking_data_mapping2_best(data);
  }
}
function tracking_data_mapping2(data) {
  let serviceProvider1 = Object.keys(data)[0];
  let data1 = data[serviceProvider1.toString()][0];
  let date = data1.lastUpdateStatus;
  let subdate = date.substr(0, 10);
  $("#provider_title").text(data1.serviceProvider);
  $("#provider_shortcode").text(data1.serviceProvider);
  $("#tracking_no").text(data1.consign_no);
  $("#tracking_status").text(data1.status);
  $("#tracking_lastupdate").text(subdate);
}
function tracking_data_mapping2_jnt(data) {
  var city = data["jnt"]["data"][0]["details"];
  var status = data["status"]
  var citydet = city[Object.keys(city)[0]];
  $("#tracking_status").text(status === "Cancelled by User" ? status : citydet?.scanstatus);
  $("#tracking_lastupdate").text(citydet?.acceptTime || new Date());
}
function tracking_data_mapping2_citylink(data) {
  var city = data["citylink"]["trackDetails"];
  var citydet = city[Object.keys(city).sort().pop()];
  $("#tracking_status").text(citydet.status);
  $("#tracking_lastupdate").text(citydet.detDate);
}
function tracking_data_mapping2_dhl(data) {
  var city =
    data["dhl"]["trackItemResponse"]["bd"]["shipmentItems"][0]["events"];
  var citydet = city[Object.keys(city)[0]];
  $("#tracking_status").text(citydet.description);
  $("#tracking_lastupdate").text(citydet.dateTime);
}
function tracking_data_mapping2_poslaju(data) {
  var city = data["poslaju"];
  var citydet = city[Object.keys(city)[0]];
  var location = citydet.process + " - " + citydet.office;
  $("#tracking_status").text(location);
  $("#tracking_lastupdate").text(citydet.date);
}
function tracking_data_mapping2_pickupp(data) {
  var city = data["pickupp"];
  var citydet = city[Object.keys(city)[0]];
  let date = citydet.lastUpdateStatus;
  let subdate = date.substr(0, 10);
  $("#tracking_status").text(citydet.status);
  $("#tracking_lastupdate").text(subdate);
}
function tracking_data_mapping2_teleport(data) {
  var city = data["teleport"];
  let date = city.data[0].updated_at;
  let subdate = date.substr(0, 10);
  $("#tracking_status").text(city.data[0].status);
  $("#tracking_lastupdate").text(subdate);
}
function tracking_data_mapping2_sfstandard(data) {
  var city = data["sfstandard"];
  let date = city.data[0].trackDetailItems[0].localTm;
  let subdate = date.substr(0, 10);
  $("#tracking_status").text(
    city.data[0].trackDetailItems[0].opCodeTranslation
  );
  $("#tracking_lastupdate").text(subdate);
}
function tracking_data_mapping2_flash(data) {
  var city = data["flash"];
  let ra = city.data.routes ? city.data.routes[0].routedAt : "";
  let status = data["status"]
  var date = ra ? new Date(ra * 1000) : new Date();
  $("#tracking_status").text(status === "Cancelled by User" ? status : (city.data.stateText ? city.data.stateText : "Pending Pickup"));
  $("#tracking_lastupdate").text(
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
}
function tracking_data_mapping2_lineclear(data) {
  var city = data["lineclear"];
  var dateParts = city.LastModifiedOn;
  var date = new Date(dateParts);
  console.log("HERE")
  $("#tracking_status").text(city?.Status || "Pending Pickup");
  $("#tracking_lastupdate").text(
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
}
function tracking_data_mapping2_best(data) {
  var city = data["best"]["traceLogs"][0];
  var date = new Date();
  var status = city?.packageStatusCode || "Pending Pickup";
  console.log("HERE", date, status);
  // var date = new Date(dateParts);
  $("#tracking_status").text("Pending Pickup");
  $("#tracking_lastupdate").text(
    date.getFullYear() + "-" + (date.getMonth() + 1) + "-" + date.getDate()
  );
}
function display_Tracking_Result_Section() {
  $("#tracking_result_section").fadeIn();
  $("#tracking_result_section").fadeIn("slow");
  $("#not_found").fadeOut();
  $("#not_found").fadeOut("slow");
}
function hide_Tracking_Result_Section() {
  $("#tracking_result_section").fadeOut();
  $("#tracking_result_section").fadeOut("slow");
}

$(function () {
  $(window).keydown(function (event) {
    if (event.keyCode == 13) {
      event.preventDefault();
      return false;
    }
  });
});
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const product = urlParams.get("id");
document.getElementById("lottie").style.display = "none";
if (product !== null) {
  document.getElementById("tracking_no_input").value = product;
  checkTrackingNoAPI(product);
  document.getElementById("lottie").style.display = "none";
  document.getElementById("track_result_block").style.display = "block";
}
var currentTime = new Date();
var year = currentTime.getFullYear();
$("#footer_text").text("© Parcel Daily " + year + ". All rights reserved");