function Process(state){
    this.state=state
}
const Singleton=(()=>{
    function ProcessManager(){
        this.numProcess=0;
    }
    let pManager;
    function createProcessManager(){
        pManager=new ProcessManager();
        return pManager;
    }
    return {
        getProcessManager:()=>{
            if (!pManager)
                pManager=createProcessManager();
            return pManager;
        }
    }
})()

const processManager= Singleton.getProcessManager();
const processManager0= Singleton.getProcessManager();

console.log(processManager0===processManager);
