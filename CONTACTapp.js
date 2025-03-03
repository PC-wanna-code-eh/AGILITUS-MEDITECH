window.addEventListener("DOMContentLoaded", function () {
    var form = document.getElementById("my-form");
    var status = document.getElementById("status");
    // Success and Error functions for after the form is submitted
    function success() {
      form.reset();
      status.classList.add("success");
      status.innerHTML = "Thanks for emailing, you'll get a reply soon";
    }
    function error() {
      status.classList.add("error");
      status.innerHTML = "ERROR, try again";
    }
    // handle the form submission event  
    form.addEventListener("submit", function (ev) {
      ev.preventDefault();
      var data = new FormData(form);
      ajax(form.method, form.action, data, success, error);
    });
  });
  // helper function for sending an AJAX request
  function ajax(method, url, data, success, error) {
    var xhr = new XMLHttpRequest();
    xhr.open(method, url);
    xhr.setRequestHeader("Accept", "application/json");
    xhr.onreadystatechange = function () {
      if (xhr.readyState !== XMLHttpRequest.DONE) return;
      if (xhr.status === 200) {
        success(xhr.response, xhr.responseType);
      } else {
        error(xhr.status, xhr.response, xhr.responseType);
      }
    };
    xhr.send(data);
  }
  

function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
      x.className += " responsive";
    } else {
      x.className = "topnav";
    }
  }