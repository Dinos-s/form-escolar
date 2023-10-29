import courseRepository from '../repositories/CourseRepository.js'

const saveCourse = (courseModel) => {
    return courseRepository.saveCourse(courseModel)
}

const getAllCourses = () => {
    return courseRepository.getAllCourses()
}

const getCourseById = (id) => {
    return courseRepository.getCourseById(id)
}

const updateCourseById = (id, courseModel) => {
    return courseRepository.updateCourseById(id, courseModel)
}

const deleteCourseById = (id) => {
    return courseRepository.deleteCourseById(id)
}

const service = {
    saveCourse,
    getAllCourses,
    getCourseById,
    updateCourseById,
    deleteCourseById,
}

export default service