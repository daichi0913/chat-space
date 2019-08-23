
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
|user_id|integer|null: false, foreign_key: true|
|grouptitle|integer|null: false, foreign_key:
true|

### Association
- has_many :messages
- has_many :users, through: :groups_users

##usersテーブル

|Column|Type|Options|
|------|----|-------|
|user_id|integer|null: false, foreign_key: true|
|name|string|null: false, foreign_key:true|
|password|string|null: false, foreign_key: true|
|e-mail|string|null: false, foreign_key: true|


### Association
- has_many :messages
- has_many :groups, through :groups_users

##messageテーブル

|Column|Type|Options|
|------|----|-------|
|text|integer|null: false, foreign_key: true|
|image|integer|null: false, foreign_key: true|
|user_id|integer|null: false, foreign_key: true|
|group_id|integer|null: false, foreign_key: true|


### Association
- belongs_to :group
- belongs_to :user
