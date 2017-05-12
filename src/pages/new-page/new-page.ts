import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { PostsProvider } from '../../providers/posts-provider';

/**
 * Generated class for the NewPage page.
 *
 * See http://ionicframework.com/docs/components/#navigation for more info
 * on Ionic pages and navigation.
 */
@IonicPage()
@Component({
  selector: 'page-new-page',
  templateUrl: 'new-page.html',
})
export class NewPage {
  posts : any[];
  constructor(public navCtrl: NavController, public navParams: NavParams, public postsProvider : PostsProvider) {
    this.postsProvider.getPosts().then((data) => {
      this.posts = data;
    })
    console.log(this.posts);
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NewPage');
  }

}
