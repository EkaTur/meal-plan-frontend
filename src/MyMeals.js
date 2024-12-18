import { AiOutlineEdit, AiFillDelete } from "react-icons/ai";

export const MyMeals = ({text, updatingInInput, deleteMeal}) => {
    return(
        <div>
            <p>{text}</p>
            <AiOutlineEdit onClick={updatingInInput} />
            <AiFillDelete onClick={deleteMeal} />
        </div>
    )
}