export async function get({ params }) {
    let body = await fetch(`https://c0re.ba-ka.org/v1/content?code=${ params.slug }`).then( result => result.text() );
    body = JSON.parse(body);
    body = body['result']
    return { body }
}