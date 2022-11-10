export const setJwtToken = user => {
    const userEmail = {
        email: user.email,
    };

    fetch("http://localhost:5000/jwt", {
        method: "POST",
        headers: {
            "content-type": "application/json",
        },
        body: JSON.stringify(userEmail),
    })
        .then(res => res.json())
        .then(data => {
            console.log(data);
            localStorage.setItem("travel-go-token", data.token);
        });
};
