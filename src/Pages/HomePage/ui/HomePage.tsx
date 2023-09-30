import { Layout } from 'Widgets'

import s from "./Home.module.scss"

const HomePage: React.FC = () => {
  return (
      <Layout>
          <div className={s.about}>
            <h1>Создание доски для записис клиентов</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam repellat soluta sequi necessitatibus sapiente, nihil recusandae accusamus suscipit laborum ullam veniam debitis omnis delectus est labore unde nam animi. Tenetur?</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Repudiandae fugiat cum non ad sed. Dignissimos illo fuga dolor soluta in, unde error aliquam porro velit assumenda ex. Libero, dolorem laboriosam.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nisi animi dolor sequi magnam iusto nobis repudiandae facere doloremque necessitatibus tempora tenetur non laborum, rem quisquam consectetur porro laudantium ut eius.</p>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quibusdam id hic sed sint quia aperiam, eum quaerat facilis quod animi minus sit odio aut. Autem sunt quis rem facilis quidem.</p>
            <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus aliquam exercitationem nihil in dolorem amet culpa obcaecati temporibus minima. Architecto quo deleniti mollitia alias earum debitis blanditiis commodi amet officiis.</p>
          </div>
      </Layout>
  )
}

export default HomePage
