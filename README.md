
##groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user


 ##groupsテーブル

|Column|Type|Options|
|------|----|-------|

|name|integer|null: false, foreign_key:
true|

### Association
- has_many :messages
- has_many :users, through: :groups_users
- has_many :groups_users

##usersテーブル

|Column|Type|Options|
|------|----|-------|
|name|string|null: false, foreign_key:true|
|password|string|null: false, foreign_key: true|
|e-mail|string|null: false, foreign_key: true|


### Association
- has_many :messages
- has_many :groups, through :groups_users
- has_many :groups_users

##messageテーブル

|Column|Type|Options|
|------|----|-------|
|text|integer|
|image|string|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


### Association
- belongs_to :group
- belongs_to :user
