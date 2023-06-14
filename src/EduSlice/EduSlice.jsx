import {createSlice} from "@reduxjs/toolkit";
import { navLinks } from "../Components/data";
import { upcomingCourses } from '../Components/data'
import { testimonials } from '../Components/data'

const initialState = {
    navLinks: navLinks,
    upcomingCourses: upcomingCourses,
    testimonials: testimonials,
    isSmallNavbarOpen: false,
    isDropdownOpen: false
}
const eduSlice = createSlice({
    name: "edu",
    initialState,
    reducers: {
        showSmallNavbar : (state) => {
            state.isSmallNavbarOpen = true
        },
        hideSmallNavbar : (state) => {
            state.isSmallNavbarOpen = false
        }
    }
})

export const {showSmallNavbar, hideSmallNavbar, showDropdown, hideDropdown} = eduSlice.actions
export default eduSlice.reducer