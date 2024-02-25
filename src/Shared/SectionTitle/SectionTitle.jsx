

const SectionTitle = ({subHeader,header}) => {
    return (
        <div className="text-center mt-10 mb-10 w-3/12 mx-auto">
            <h3 className="text-amber-400 text-xl font-medium mb-4">{subHeader}</h3>
            <h2 className="text-3xl font-bold border-y-4 p-4 uppercase ">{header}</h2>
        </div>
    );
};

export default SectionTitle;