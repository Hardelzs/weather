
      let isInputIncorrect = false;
      const userInputField = document.getElementById("userInput");
      const button2 = document.getElementById("button1");

      button2.addEventListener("click", () => {
        const user = userInputField.value;

        // alert('press ok to website to safe you ')

        if (user == "") {
          const h1Element = document.querySelector("h1");
          h1Element.innerHTML = "pls insert your fucking name pls";
          h1Element.style.color = "red";
          isInputIncorrect = true;
          return;
        }

        if (!isNaN(user)) {
          const h1Set = document.querySelector("h1");
          h1Set.innerHTML = "Please insert alphabets";
          h1Set.style.color = "red";
          isInputIncorrect = true;
          return;
        }

        if (isInputIncorrect) {
          const h1Element = document.querySelector("h1");
          h1Element.innerHTML = `Thank you very much ${user}`;
          h1Element.style.color = "black";
          return;

        }

        document.querySelector("h1").innerHTML = `Thank you very much ${user}`;
      });
   