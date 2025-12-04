const apiKey = "AIzaSyBjpMZsnM2I3PsG2uHe9EMilK8DXW3UGhg";

async function askAI() {
  const question = document.getElementById("question").value;
  const answerDiv = document.getElementById("answer");
  
  if (!question) {
    answerDiv.innerText = "اكتب سؤال أولاً!";
    return;
  }

  answerDiv.innerText = "جاري الحصول على الرد...";

  try {
    const response = await fetch("https://api.openai.com/v1/chat/completions", { 
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "Authorization": `Bearer ${apiKey}`
      },
      body: JSON.stringify({
        model: "gpt-3.5-turbo",
        messages: [{ role: "user", content: question }]
      })
    });

    const data = await response.json();
    answerDiv.innerText = data.choices[0].message.content;
  } catch (error) {
    answerDiv.innerText = "حدث خطأ، حاول مرة أخرى.";
    console.error(error);
  }
}
