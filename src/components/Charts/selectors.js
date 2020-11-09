import CATEGORIES from '../../constants/categories'

export const getTitles = selected => {
    const selectedCategory = CATEGORIES.find(
        category => category.value === selected
    )

    return {
        title: selectedCategory.label,
        subtitle: selectedCategory.subtitle,
    }
}
