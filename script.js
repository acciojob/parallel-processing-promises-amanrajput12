//your JS code here. If required.
const output = document.getElementById("output");
const btn = document.getElementById("download-images-button");

const images = [
  { url: "https://picsum.photos/id/237/200/300" },
  { url: "https://picsum.photos/id/238/200/300" },
  { url: "https://picsum.photos/id/239/200/300" },
];

function downloadImage(url){
	return new Promise((resolve,reject)=>{
		const img =new Image();
		img.src=url;
		img.onload=()=>resolve(img);
		img.onerror=()=>reject(`failed to load image : ${url}`);
		
	})
}

async function downloadImages(){
	let loading = document.createElement("span");
	   
	output.innerHTML="";
	 loading.style.display = "block";
	loading.innerText="loading...."
	output.appendChild(loading)
	try{
		const imageElements =await Promise.all(images.map(image=>downloadImage(image.url)))
		imageElements.forEach(img=>output.appendChild(img));
		
	}
	catch(error){
		let errordiv = document.createElement("span");
		errordiv.innerText=error.message;
		output.appendChild(errordiv)
	} finally{
		loading.style.display="none"
	}
}

btn.addEventListener("click",downloadImages)


btn.addEventListener("click",()=>{
	// alert("hello");
})