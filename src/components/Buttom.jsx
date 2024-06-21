import PropTypes  from "prop-types";

export default function Buttom({text}){
    return <>
     <button>
        { text }
    </button>
    </>
}

Buttom.protoTypes = {
    text: PropTypes.string.isRequired
}