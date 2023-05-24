import React from 'react'
import Edit from '../img/edit.png'
import Delete from '../img/delete.png'
import {Link } from 'react-router-dom'
import Menu from '../components/Menu'

const Single = () => {
  return (
      <div className="div single">
        <div className="content">
          <img src="https://images.pexels.com/photos/7008010/pexels-photo-7008010.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="" />
          <div className="user">
            <img src="https://i.ibb.co/dBCDzQf/Schermata-2023-05-24-alle-12-18-17.png" alt="" />
            <div className="info">
              <span>John</span>
              <p>Posted 2 days ago</p>
            </div>
            <div className="edit">
              <Link to={`/write?edit=2`}>
              <img src={Edit} alt="" />
              </Link>
              <img src={Delete} alt="" />
            </div>
          </div>
          <h1>Lorem ipsum, dolor sit amet consectetur culpa esse officis quo.</h1>

          <p>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Atque, voluptates delectus temporibus perspiciatis deleniti consequatur!
            Exercitationem adipisci vero animi quisquam nihil voluptates a beatae dolores cum. Nesciunt impedit alias autem.
            Repudiandae distinctio earum sint fuga reiciendis eos, quod est voluptatibus eum eius amet quo doloremque!
            Quia omnis ipsam quis, assumenda fugiat laborum, dolores maiores non ipsum sapiente optio culpa minima!
            <br/><br/>
            Vitae alias, esse nihil dignissimos quaerat, officia et sunt deleniti nesciunt excepturi, quod quia! Saepe?
            Non, impedit amet quasi aliquid minima alias dolores temporibus, adipisci similique, porro debitis? Tempore, tempora!
            Alias consequatur nostrum eos odit architecto assumenda, ipsam nesciunt praesentium nisi, quod quaerat debitis velit.
            <br/><br/>
            Magnam animi odio debitis reprehenderit vero, quisquam blanditiis excepturi necessitatibus quaerat, eos, a sequi! Vero?
            Dolores libero beatae porro, tempora rerum saepe totam ipsum perferendis doloremque earum laudantium optio a.
            Alias optio inventore quidem, ab beatae assumenda, eveniet molestiae tempora mollitia eos officiis architecto. Perspiciatis?
            Amet blanditiis, exercitationem consequatur minima hic, incidunt magnam, earum ratione voluptatum vitae expedita quo! Asperiores?
            Natus accusamus, autem cumque velit ipsa cupiditate. Vero consequatur doloribus tenetur facilis voluptatum fugiat. Rerum.
            Eaque fugit modi molestiae, praesentium tempore nemo, veniam numquam accusamus aperiam corrupti perferendis rem voluptate.
            Unde voluptatibus soluta id dolorem provident saepe a commodi. Nihil id officiis illo! In, consequatur.
            <br/><br/>
            Magnam autem totam perferendis quo eos! Esse laborum tenetur veniam temporibus dolorum reiciendis odio nam.
            Exercitationem, vitae culpa magnam voluptatem, quaerat, hic minima adipisci quidem voluptas iusto soluta sunt itaque.
            Quas alias laborum aliquid perferendis expedita consequuntur, rerum nihil sit consectetur, recusandae soluta, ullam quibusdam.
            Labore voluptatibus quisquam sed vero possimus est ratione ea, porro nihil, repudiandae laborum neque architecto!
            Eum, culpa esse officiis quo, pariatur nostrum laudantium quaerat veniam, dolor quos animi porro natus.
            Facere quis molestiae iste expedita maiores quisquam dolores unde, ea veritatis alias obcaecati odit officia?
            Beatae obcaecati perspiciatis minus quidem aliquam ut officia? Exercitationem esse nemo aut sequi tempore minus?
            Beatae, laboriosam ea officia, mollitia quia laborum dolore aliquam porro quos quis maxime itaque vel.
            Fugiat tempora quam sequi non vitae culpa facilis id eum dolores, magnam corrupti, minima rerum?
            Perferendis quaerat minima voluptate similique omnis ipsa sequi quas laudantium molestiae, nemo facilis libero nostrum.
            Blanditiis natus dolorem tempora tempore. Est iusto dicta dolor atque enim tempore ipsa similique autem.
            Veniam ab cumque velit quo nisi rerum, explicabo eaque saepe unde accusantium distinctio beatae reprehenderit.
            Tempore dolore, porro quas expedita voluptate vero cumque commodi, illum temporibus blanditiis corporis adipisci maiores.
            Dicta earum illo quibusdam ut esse optio hic nostrum, odio dignissimos consectetur libero aut obcaecati?
            Harum, dignissimos rem. Natus maxime ducimus harum incidunt nostrum asperiores molestias unde amet dignissimos reprehenderit.
            Velit repellat, eaque eligendi corporis maxime consequatur repellendus quod facilis eius aliquam! Quibusdam, itaque excepturi.
          </p>
        </div>
        <Menu/>
      </div>
  )
}

export default Single
