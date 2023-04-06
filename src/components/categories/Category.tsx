import CategoryCard from "./CategoryCard";

interface ICategoryProps{
    categoryName: string
}

const Category = (props: ICategoryProps) => {
    return(
        <div className="container container-fluid">
            {(() => {
                switch (props.categoryName) {
                    case "Commercial cleaning":
                        return <CategoryCard categoryName={props.categoryName}/>
                    case "Regular cleaning":
                        return <CategoryCard categoryName={props.categoryName}/>
                    case "Tradespeople":
                        return <CategoryCard categoryName={props.categoryName}/>
                    case "End of tenancy cleaning":
                        return <CategoryCard categoryName={props.categoryName}/>
                    case "Deep cleaning":
                        return <CategoryCard categoryName={props.categoryName}/>
                    case "One-off cleaning":
                        return <CategoryCard categoryName={props.categoryName}/>
                }
            })()}
        </div>
    );
}

export default Category;