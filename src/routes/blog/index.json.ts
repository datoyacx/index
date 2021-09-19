export async function get() {
    let body = await fetch('https://c0re.ba-ka.org/v1/content?userid=3').then( result => result.text() );
    body = JSON.parse(body);
    body = body['result']
    return { body }
}