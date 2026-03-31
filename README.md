create table cards(
	card_id integer generated always as identity,
	card_title varchar,
	card_description varchar,
	card_image_url varchar,
	card_price varchar,
	created_at timestamp with time zone default current_timestamp,
	updated_at timestamp with time zone default current_timestamp,
	deleted_at timestamp with time zone default current_timestamp
)
