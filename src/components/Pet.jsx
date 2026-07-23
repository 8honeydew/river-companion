function Pet({ pet, animation, onClick }) {
    return (
        <div 
        className={`river ${animation}`}
        onClick={onClick}
        >
            {pet}
        </div>
    );
}

export default Pet;
