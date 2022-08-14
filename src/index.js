import * as $ from 'jquery'
import { Post } from "@modules/Post";
import './styles/style.css';
import './index.html';
import json from './assets/json.json';
import logoWebpack from './assets/images.png';

const post = new Post('Hello webpack', logoWebpack);

$('pre').html(post.toString());

console.log(post.toString());
console.log(`JSON file`, json);