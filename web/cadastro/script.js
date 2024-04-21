const form = document.querySelector("form");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const formData = new FormData(form);
  const userName = formData.get("username");
  const email = formData.get("email");
  const cpf = formData.get("cpf");
  const password = formData.get("password");

  console.log(userName, email, cpf, password);

  const body = {
    name: userName,
    email,
    cpf,
    password,
  };
  const bodyObj = JSON.stringify(body);

  fetch("http://localhost:8080/aluno", {
    method: "POST",
    headers: {
      "content-type": "application/json",
    },
    body: bodyObj,
  })
    .then((response) => {
      const resposta = response.json();
      return resposta;
    })
    .then((data) => {
      console.log(data);
      alert("Aluno criado com sucesso");
      window.location.replace("//localhost:5500/");
    });
});
