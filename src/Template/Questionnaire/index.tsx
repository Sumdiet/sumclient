import Header from "../../Components/Header";
import QuestionnaireCard from "../../Components/QuestionnaireCard";
import './style.sass'
export default function Questionnaire() {

    return (
        <>
        <Header/>
        <section id="questions">
            <div className="question-body">
                <h1>Qual seu peso?</h1>
                <div className="question-cards">
                    <QuestionnaireCard text='teste isso é um teste'></QuestionnaireCard>
                    <QuestionnaireCard text='teste'></QuestionnaireCard>
                    <QuestionnaireCard text='teste'></QuestionnaireCard>
                    <QuestionnaireCard text='teste'></QuestionnaireCard>
                </div>
            </div>
        </section>
        </>
    )
}