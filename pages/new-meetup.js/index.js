import NewMeetUpForm from '../../components/meetups/NewMeetupForm'
const NewMeetUpPage = () => {
    const addMeetUpHandler = (enterMeetupData) => {
        console.log(enterMeetupData);
    }

    return <NewMeetUpForm onAddMeetup={addMeetUpHandler} />
}

export default NewMeetUpPage
