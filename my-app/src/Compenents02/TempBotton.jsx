import  "./Style.css"
function TempBotton() {
    const Handler = () => {
        console.log("clicked")
        alert("clicked")
    }
    const CopyHandler=() => {
        console.log("copied")
        alert("copied")
    }

    const MoveHandler=() => {
        alert("moved")
    }
    return (
        <div className='Box'>
            <h1>TempBotton</h1>
            <button onClick={() => Handler() }>click me</button>
            <button onClick={() => Handler() }>Home</button>
            <button onClick={() => Handler() }>About</button>
            <h1>Pragraph</h1>
            <p onCopy={() => CopyHandler() }>Lorem ipsum dolor sit amet consectetur adipisicing elit. Corporis cumque iure debitis qui deleniti quae eligendi, dolores totam reiciendis, voluptate veniam optio hic similique eos vel temporibus, magni minus illum asperiores animi. Praesentium, quae tempore magnam laborum deleniti ipsa, saepe minus voluptate veniam, vero ipsum modi consequatur facilis illo provident nulla distinctio cupiditate deserunt quisquam cum? Molestias, deserunt recusandae nulla distinctio doloremque fugiat quam aspernatur, dignissimos sapiente debitis, illo modi reiciendis officia voluptatibus quos sunt quae error voluptas ab deleniti! Officiis eos magni voluptates porro quo necessitatibus. Incidunt quas enim earum, magni iste vitae repellendus non accusamus? Voluptatum reiciendis sunt consectetur maiores cupiditate necessitatibus accusantium vitae quasi nam vel, deleniti suscipit atque cum, autem repudiandae repellendus amet voluptas ipsum. Quisquam, eos dignissimos. Omnis quaerat similique nobis facilis delectus at odit deserunt quisquam! Eius omnis vel voluptatum, possimus dolore voluptas saepe quod veniam. Esse impedit ad unde perspiciatis. Mollitia fuga sed facere esse maxime corporis eveniet ad. Pariatur officia reiciendis quis ducimus cumque quod praesentium iure ullam, sequi eius a odit sapiente unde ipsam laboriosam. Sit facere unde inventore ipsum provident veniam non consequuntur placeat, libero at ea ab a corporis quisquam natus! Qui tempora accusamus id. Ipsum architecto autem quidem.</p>
            <hr />
            <p Mousemove={() => MoveHandler() }>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ducimus debitis ipsam nam soluta expedita, mollitia laborum qui aliquam asperiores omnis, libero est at ut nulla laboriosam veniam provident inventore? Voluptate?Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusamus iusto quos amet. Et, sunt! Repudiandae mollitia inventore facilis aperiam suscipit aspernatur, facere dolorem sit. Similique itaque deserunt voluptas aut obcaecati.</p>
        </div>
    )
}
export default TempBotton;