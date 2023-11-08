document.querySelector("#submit").addEventListener("click", makeReq);
document.querySelector(".form").addEventListener("submit", (e) => {
    e.preventDefault();
    makeReq();
});

async function makeReq() {
    const bandMember = document.querySelector("#bandmember").value;
    const res = await fetch(
        // encode URI component so that the user can pass spaces, etc to the params
        `/api?bandmember=${encodeURIComponent(bandMember.toLowerCase())}`
    );
    const data = await res.json();

    console.log(data);

    document.querySelector("#bandMemberName").textContent = data.bandMemberName;
    document.querySelector("#bandMemberStageName").textContent =
        data.bandMemberStageName;
    document.querySelector("#albumWhenJoined").textContent =
        data.albumWhenJoined;
}
