function Pet({ pet, onClick }) {
    return (
        <div 
        className="river"
        onClick={onClick}
        >
            {pet}
        </div>
    );
}

export default Pet;