import { useState } from 'react';

const Content = ({onAddItem, items}) => {

    const [description,setDescription] = useState("");

    function handleSubmit(event){
        event.preventDefault();
        if(!description) return;
        const newItem = {description};
        onAddItem(newItem);

        setDescription("");
    }
    let sortedItems = items;
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input value={description} onChange={(e)=>setDescription(e.target.value)} type="textarea" />
                <input type="submit" value="submit"/>
            </form>
            <ul>
                {
                sortedItems.map((item ,i) => (
                    <li key={i}>{item.description}</li>
                ))
                }
            </ul>
        </div>
    );
};

export default Content;