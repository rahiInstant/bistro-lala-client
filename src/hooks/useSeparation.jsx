import useMenu from "./useMenu";

const useSeparation = (category) => {
  const [data] = useMenu();
  const specificCategoryFood = data?.filter(
    (item) => item.category === category
  );
  return specificCategoryFood;
};

export default useSeparation;
