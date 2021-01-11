import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.page.html',
  styleUrls: ['./gallery.page.scss'],
})
export class GalleryPage implements OnInit {

  constructor() { }

  gallery= [
    {
      image: '../../assets/madison.jpg',
      subtitle: 'Destination',
      title: 'Madison, WI',
      content: '      Founded in 1829 on an isthmus between Lake Monona and Lake Mendota, Madison was named the capital of the Wisconsin Territory in 1836.\n'
    },
    {
      image: '../../assets/papillon.jpg',
      subtitle: 'Into the wild',
      title: 'Beautiful butterfly',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque aut, blanditiis commodi consequuntur corporis deserunt, eaque id illo ipsa laborum laudantium perferendis quae quam reiciendis reprehenderit saepe suscipit vel!'
    },
    {
      image: '../../assets/pont.jpg',
      subtitle: 'Bride to nowhere',
      title: 'Bridge',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque aut, blanditiis commodi consequuntur corporis deserunt, eaque id illo ipsa laborum laudantium perferendis quae quam reiciendis reprehenderit saepe suscipit vel!'
    },
    {
      image: '../../assets/trou-noir.jpg',
      subtitle: 'Worlds',
      title: 'Beautiful image',
      content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi atque aut, blanditiis commodi consequuntur corporis deserunt, eaque id illo ipsa laborum laudantium perferendis quae quam reiciendis reprehenderit saepe suscipit vel!'
    },
  ];

  ngOnInit() {
  }

}
