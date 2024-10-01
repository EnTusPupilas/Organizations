function getOrganizationData() {
    fetch('organization.json')
    .then(response => response.json())
    .then(data => {
        document.getElementById("organization_name").textContent = data.organization_name;
        document.getElementById("type").textContent = data.type;
        document.getElementById("description").textContent = data.description;
        document.getElementById("email").textContent = data.email;
        document.getElementById("address").textContent = data.address;
        document.getElementById("url").textContent = data.url;
    })
    .catch(error => console.error('Error fetching organization data:', error));
}
