
export const filterReducer = (state, action) => {
    switch (action.type) {
        case 'GET_ALL_WORKSHOPS':
            return [...action.workshops];
        case 'GET_GROUPWORKS':
            return [...action.groupworks];
        case 'GET_BLOGS':
            return [...action.blogs];
        case 'UPDATE_BLOG_BY_TAG':
            return [...action.blogs];
        case 'FIND_BLOGS_BY_SEARCH':
            return [...action.blogs];
        case 'FIND_MATERIALS_BY_SEARCH':
            return [...action.materials];
        case 'GET_MATERIALS':
            return [...action.materials];
        case 'GET_EMAILS':
            return [...action.userEmail];    
        default:
            return state;
    }
};
