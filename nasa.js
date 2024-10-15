let spinner = document.getElementById('spinner')


function NasaAPI(){
    
    fetch('https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=JxtDZX8mnHoUdh4zqZF7LdoDBeQjPagNiOXzK3pm')
    .then(res=>res.json())
    .then(data=>{
        console.log(data)
        
        data.photos.map(item=>{
            console.log(item)

            let div = document.createElement('div');
            div.style.width = '200px'
            div.classList = 'bg-secondary text-light card m-2 p-2 d-flex flex-column justify-content-center';
            div.innerHTML = `
            <div class="card-header">
                <img src='${item.img_src}' width="100px"/>
            </div>
            <div class="card-body">
                <h5>${item.camera.full_name}</h5>
                <p>Launch date: ${item.rover.launch_date} </p>
            </div>
            <div class="card-footer">
            <a href="https://api.nasa.gov/">see more...</a>
            </div>
            `
           
            document.getElementById('nasa').appendChild(div);
        })
    })
    document.getElementById('btn').classList.add('d-none')
}