// let domain


const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    // [::1] is the IPv6 localhost address.
    window.location.hostname === '[::1]' ||
    // 127.0.0.0/8 are considered localhost for IPv4.
    window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
);



export const domain = isLocalhost ? "http://localhost:5000" : "https://restaurant-supplier-api--ahmadali5.repl.co"


// export const domain = "https://restaurant-supplier-api--ahmadali5.repl.co"