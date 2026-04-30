document.getElementById("contactForm").addEventListener("submit", async function(e) {

    e.preventDefault();

    const form = e.target;

    const data = {
        name: form.name.value,
        email: form.email.value,
        message: form.message.value
    };

    try {

        const response = await fetch("https://formspree.io/f/xaqaknnp", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify(data)

        });

        if(response.ok) {

            document.getElementById("status").innerHTML =
            "Message sent successfully!";

            form.reset();

        } else {

            document.getElementById("status").innerHTML =
            "Failed to send message.";

        }

    } catch(error) {

        document.getElementById("status").innerHTML =
        "Something went wrong.";

    }

});
