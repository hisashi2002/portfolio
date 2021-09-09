class CreateEmps < ActiveRecord::Migration[5.0]
  def change
    create_table :emps do |t|
      t.string :images_emp

      t.timestamps
    end
  end
end
