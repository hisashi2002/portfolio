class EmpController < ApplicationController
  
  def top
  end

  def about
  end

  def janken
  end
  
  def choice0
    if @user_hand = 1 == @emp_hand = rand(3)
      redirect_to("/emp/win")    
    else
      redirect_to("/emp/retry")
    end
  end

  def choice1
    if @user_hand = 2  == @emp_hand = rand(3)
      redirect_to("/emp/win")    
    else
      redirect_to("/emp/retry")
    end
  end

  def choice2
    if @user_hand = 3 == @emp_hand = rand(3)
      redirect_to("/emp/win")    
    else
      redirect_to("/emp/retry")
    end
  end

  def win
    
  end

  def retry
    @image_o = Game.all[0].images_other
  end

end
