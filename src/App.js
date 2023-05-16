const App = () => {

  const categories = [
    {
      id: 1,
      title: "Hats"
    },
    {
      id: 2,
      title: "Jackets"
    },
    {
      id: 3,
      title: "Jeans"
    },
    {
      id: 4,
      title: "Men"
    },
    {
      id: 5,
      title: "Women"
    }
  ]

  return (
    <div className="categories-container">
    {categories.map((category) => (
      <div className="category-container">
        <div className="img"/>
        <div className="category-body-container">
          <h2>{category.title}</h2>
          <p>shop now</p>
        </div>
      </div>
    ))}
    </div>
  );
}

export default App;
