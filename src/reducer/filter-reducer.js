const filterReducer = (filterState, action) => {
    let filterStateCopy = { ...filterState };
    switch (action.type) {
      case "UPDATE_PRODUCTS":
        filterStateCopy = {
          ...filterStateCopy,
          product: action.payload.products,
          default: action.payload.products,
        };
        break;
  
  
      case "RANGE_FILTER":
        filterStateCopy = {
          ...filterStateCopy,
          price: action.payload.maxPrice,
          product: filterStateCopy.default.filter(
            (item) => item.price <= action.payload.maxPrice
          ),
        };
        break;
  
      case "TOGGLE_CATEGORY":
        filterStateCopy = {
          ...filterStateCopy,
          category: [
            ...(filterStateCopy.category.includes(action.payload.category)
              ? filterStateCopy.category.filter(
                  (category) => category !== action.payload.category
                )
              : [...filterStateCopy.category, action.payload.category]),
          ],
        };
        filterStateCopy = {
          ...filterStateCopy,
          product: [
            ...(filterStateCopy.category.length
              ? filterStateCopy.default.filter((item) =>
                  filterStateCopy.category.includes(item.category)
                )
              : filterStateCopy.default),
          ],
        };
        break;
  
      case "RATING_FILTER":
        filterStateCopy = {
          ...filterStateCopy,
          rating: action.payload.rating,
          product: filterStateCopy.default.filter(
            (item) => item.rating >= action.payload.rating
          ),
        };
        break;
      case "SORT_FILTER":
        filterStateCopy = {
          ...filterStateCopy,
          sort: action.payload.sort,
          product:
            action.payload.sort === "LOW_TO_HIGH"
              ? [...filterStateCopy.default].sort((a, b) => b.price - a.price)
              : [...filterStateCopy.default].sort((a, b) => a.price - b.price),
        };
        break;
      default:
        break;
    }
  
    if (filterStateCopy.sort !== null && !action.payload.sort) {
      filterStateCopy = {
        ...filterStateCopy,
        product:
          action.payload.sort === "LOW_TO_HIGH"
            ? [...filterStateCopy.product].sort((a, b) => b.price - a.price)
            : [...filterStateCopy.product].sort((a, b) => a.price - b.price),
      };
    }
  
    if (filterStateCopy.category.length && !action.payload.category) {
      filterStateCopy = {
        ...filterStateCopy,
        product: [
          ...(filterStateCopy.category.length
            ? filterStateCopy.product.filter((item) =>
                filterStateCopy.category.includes(item.category)
              )
            : filterStateCopy.product),
        ],
      };
    }
  
    if (filterStateCopy.price !== 50 && !action.payload.maxPrice) {
      filterStateCopy = {
        ...filterStateCopy,
        product: filterStateCopy.product.filter(
          (item) => item.price <= filterStateCopy.price
        ),
      };
    }
  
    if (filterStateCopy.rating !== 5 && !action.payload.rating) {
      filterStateCopy = {
        ...filterStateCopy,
        rating: filterStateCopy.rating,
        product: filterStateCopy.product.filter(
          (item) => item.rating >= filterStateCopy.rating
        ),
      };
    }
  
    return { ...filterStateCopy };
  };


export { filterReducer} ;