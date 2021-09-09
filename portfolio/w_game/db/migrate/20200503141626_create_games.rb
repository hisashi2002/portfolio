class CreateGames < ActiveRecord::Migration[5.0]
  def change
    create_table :games do |t|
      t.string :images_other

      t.timestamps
    end
  end
end
