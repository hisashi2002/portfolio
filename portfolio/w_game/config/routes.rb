Rails.application.routes.draw do
  get 'home/top'

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  get "/" => "home#top"
    
      get "bsh/about" => "bsh#about"
   
      get "emp/janken" => "emp#janken"
      post "emp/janken" => "emp#choice0"
      post "emp/janken" => "emp#choice1"
      post "emp/janken" => "emp#choice2"

      get "emp/win" => "emp#win"
      get "emp/retry" => "emp#retry"
    
      get "cl/about" => "cl#about"

  end

