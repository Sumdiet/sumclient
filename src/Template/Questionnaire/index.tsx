import Header from "../../Components/Header";
import QuestionnaireCard from "../../Components/QuestionnaireCard";
import './style.sass'
export default function Questionnaire() {
    const list = [['Qual descreveria melhor você?', 'Homem', 'Mulher', '+'],
     ['Qual o seu objetivo', 'Ganhar massa muscular', 'Perder peso', 'Manuntenção'],
      ['Qual a sua rotina de treino?', 'Não treino', '1-3 vezes na semana', '4-6 vezes na semana', 'Todos os dias'],
       ['Qual a sua idade?', '-20 anos', '-30 anos', '-40 anos', '-50 anos', '-60 anos', '+60 anos']];
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