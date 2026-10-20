const $ = (id) => document.getElementById(id);

const formValidasi = $("formLengkap");
const emailPola = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

formValidasi.addEventListener("submit", (e) => {
  e.preventDefault();
  let isFormValid = true;

  const validasiField = (idElementInfo, isValid, pesanError) => {
    $(idElementInfo).textContent = isValid ? "" : pesanError;
    if (!isValid) isFormValid = false;
  };

  validasiField(
    "errName",
    $("vName").value.trim() !== "",
    "Name must be filled out",
  );
  validasiField(
    "errAddr",
    $("vAddr").value.trim() !== "",
    "Address must be filled out",
  );
  validasiField(
    "errMail",
    emailPola.test($("vMail").value.trim()),
    "Enter a valid email address",
  );
  validasiField(
    "errPass",
    $("vPass").value.length >= 6,
    "Password must be at least 6 characters",
  );
  validasiField(
    "errCourse",
    $("vCourse").value !== "",
    "Please select a course",
  );
  validasiField(
    "errCollege",
    $("vCollege").value.trim() !== "",
    "College name is required",
  );
  validasiField("errAgree", $("vAgree").checked, "You must agree to the terms");

  if (isFormValid) {
    $("statusFinal").textContent = "Registration successful!";
    $("statusFinal").style.color = "green";
  } else {
    $("statusFinal").textContent = "Please fix the errors above.";
    $("statusFinal").style.color = "red";
  }
});

$("vReset").addEventListener("click", () => {
  document
    .querySelectorAll(".error-txt")
    .forEach((el) => (el.textContent = ""));
  $("statusFinal").textContent = "";
});
