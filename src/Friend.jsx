export default function Friend ({friend}){
  const {name, email,phone}= friend;
    return(
        <div className="box">
            <h4>Name:{name}</h4>
            <p>Email:{email}</p>
            <p>phone:{phone}</p>
        </div>
    )
}