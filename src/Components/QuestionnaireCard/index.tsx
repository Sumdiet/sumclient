import './style.sass'
export default function QuestionnaireCard(props: any) {
    return (
        <div className='card'>
            {props.text}
        </div>
    )
}