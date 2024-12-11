import "./style.css"
interface tt{
    id:number,
    task:string,
    checked:boolean,
}

let arrtt : Array<tt>=[];

const form = document.getElementById("form") as HTMLFormElement;


form.onsubmit= (e:SubmitEvent):void =>{
    e.preventDefault();
    const input = document.querySelector(".input") as HTMLInputElement;
    const val :tt = {
        id:arrtt.length +1,
        task:input.value,
        checked:false
    }
    arrtt.push(val);
    render();
    input.value="";
    console.log(arrtt);
}

const render = ():void=>{
    const tasklist = document.querySelector(".task-list") as HTMLDivElement;
    tasklist.innerHTML ="";
    arrtt.forEach((item)=>{
        createelemts(item.task,item.id,item.checked);
    })
}

const createelemts = (task:string,id:number,cc:boolean)=>{
    const tasklist = document.querySelector(".task-list") as HTMLDivElement;
    // //creating the element
    const div = document.createElement("div");
    const btn = document.createElement("button");
    const checked = document.createElement("button");
    const h2 = document.createElement("h2");
    // inserting the value
    h2.textContent = `✨ ${task}`;
    btn.textContent = "Delete";
    checked.textContent="Check";
    checked.className="checkbtn"

    //event.addListener
    btn.onclick = ()=>{
        deltask(id)
    }
    checked.onclick = ()=>{
    //    h2.className = checked.ch?"checked":"hello";
     const index=  arrtt.findIndex((item)=>item.id ===id)
     arrtt[index].checked = !arrtt[index].checked;
     h2.className = arrtt[index].checked?"checked":"";
    }
    h2.className = cc?"checked":"";
    //appending in the parent element
    div.append(h2,checked,btn);
    // adding the class
    div.className="task"
    tasklist.appendChild(div);
}

const deltask = (id:number):void=>{
    const findindex = arrtt.findIndex(item=>item.id == id);
    arrtt.splice(findindex,1);
    render();
}