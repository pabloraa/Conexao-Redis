async function teste(){
    
    const redis = require('redis')

    const client = redis.createClient("redis://localhost:6379");

    client.connect();

    const result1 = client.set('lastSearch','cursos');

    const result2 = await client.get('lastSearch');

    console.log(result1);

    console.log(result2);

    return client;

}

//teste();





